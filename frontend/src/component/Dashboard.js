import React, { useState } from "react";
import "./Dashboard.css";
import UnlSdk from "unl-map-js";
import { Link, useNavigate } from "react-router-dom";
import apiPost, { apiCheckLogin } from "../functions/basic.js";
import Geohash from "latlon-geohash";
import { Button } from "@mui/material";


export default function Dashboard() {
  function clickHandler() {
    document.querySelector(".searchDiv").style.display = "none";
  }
  const [text, setText] = useState("");
  let [a, setA] = React.useState(null);
  let navbarScale = 50;

  let [geo, setGeo] = React.useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!a) {
      apiCheckLogin(setA);
    }
    apiPost("get/potholeGeo", {}, setGeo);
  }, []);
  React.useEffect(() => {
    if (geo) {
      let s = [];
      geo.forEach((element) => {
        let f = [];
        f.push(element.lat);
        f.push(element.lng);
        s.push(f);
      });
      var geojson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              coordinates: s,
              type: "LineString",
            },
          },
        ],
      };
      map.addSource("heat", {
        type: "geojson",
        data: geojson,
      });
      map.addLayer({
        id: "heatmap",
        type: "heatmap",
        source: "heat",
      })
    }
  }, [geo]);
  React.useEffect(() => {
    if (a) {
      if (a.err) {
        navigate("/welcome");
      }
    }
  }, [a]);
  React.useEffect(() => {
    var map = new UnlSdk.Map({
      apiKey: "Ddm47D4q7Iq7ci026pTvaMsIDpinlJNl",
      vpmId: "2d2639a7-b6d6-403a-b84c-95b63af2cae8",
      container: "map",
      center: [0, 0],
      zoom: 1,
      minZoom: 2,
    });
    navigator.geolocation.getCurrentPosition((position) => {
      map.jumpTo({
        center: [position.coords.longitude, position.coords.latitude],
        zoom: 18,
        pitch: 45,
        // bearing: 90
      });
      var marker = new UnlSdk.Marker()
        .setLngLat([position.coords.longitude, position.coords.latitude])
        .addTo(map);
    });
  }, []);
  function search() {
    fetch(
      "https://api.unl.global/v2/geocode/forward?" +
        new URLSearchParams({
          query: text,
          country: "IN",
          limit: 10,
        }),
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-unl-api-key": "Ddm47D4q7Iq7ci026pTvaMsIDpinlJNl",
          "x-unl-vpm-id": "2d2639a7-b6d6-403a-b84c-95b63af2cae8",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }
  return (
    <>
      <div className="locatorDashboard">
        <div className="form__group-locator">
          <label htmlFor="from" className="form__label-locator">
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0175 9.23501C19.8595 7.53041 19.2786 5.89728 18.3313 4.49464C17.384 3.09199 16.1026 1.96765 14.6119 1.23109C13.1211 0.494529 11.4719 0.170855 9.82467 0.291585C8.17748 0.412315 6.58851 0.973335 5.21249 1.92001C4.03033 2.73977 3.03792 3.82086 2.30655 5.08564C1.57518 6.35041 1.12299 7.76747 0.982488 9.23501C0.844656 10.6929 1.0215 12.1644 1.50018 13.5427C1.97886 14.9209 2.74738 16.1714 3.74999 17.2033L9.71249 23.3983C9.81707 23.5077 9.9415 23.5945 10.0786 23.6537C10.2157 23.713 10.3627 23.7434 10.5112 23.7434C10.6598 23.7434 10.8068 23.713 10.9439 23.6537C11.081 23.5945 11.2054 23.5077 11.31 23.3983L17.25 17.2033C18.2526 16.1714 19.0211 14.9209 19.4998 13.5427C19.9785 12.1644 20.1553 10.6929 20.0175 9.23501ZM15.675 15.5583L10.5 20.925L5.32499 15.5583C4.56234 14.7674 3.97814 13.8111 3.61439 12.7581C3.25064 11.7051 3.11637 10.5816 3.22124 9.46835C3.32678 8.33797 3.67322 7.24604 4.23551 6.2715C4.79779 5.29696 5.56186 4.46417 6.47249 3.83335C7.66605 3.01112 9.06708 2.57253 10.5 2.57253C11.9329 2.57253 13.3339 3.01112 14.5275 3.83335C15.4354 4.46173 16.1977 5.29084 16.7599 6.26111C17.322 7.23138 17.67 8.31872 17.7787 9.44502C17.887 10.562 17.7544 11.69 17.3906 12.7473C17.0267 13.8046 16.4407 14.7648 15.675 15.5583ZM10.5 5.00001C9.49872 5.00001 8.51994 5.30792 7.68742 5.8848C6.85489 6.46168 6.20602 7.28161 5.82285 8.24093C5.43968 9.20024 5.33943 10.2558 5.53476 11.2742C5.7301 12.2926 6.21226 13.2281 6.92026 13.9623C7.62826 14.6966 8.53032 15.1966 9.51234 15.3991C10.4944 15.6017 11.5123 15.4977 12.4373 15.1004C13.3624 14.703 14.153 14.0301 14.7093 13.1668C15.2656 12.3034 15.5625 11.2884 15.5625 10.25C15.5595 8.85858 15.0252 7.52501 14.0764 6.54111C13.1277 5.55721 11.8417 5.0031 10.5 5.00001ZM10.5 13.1667C9.94373 13.1667 9.39996 12.9956 8.93745 12.6751C8.47493 12.3546 8.11445 11.8991 7.90158 11.3662C7.68871 10.8332 7.63301 10.2468 7.74153 9.681C7.85005 9.11522 8.11792 8.59552 8.51125 8.18762C8.90459 7.77972 9.40573 7.50193 9.9513 7.38939C10.4969 7.27685 11.0624 7.33461 11.5763 7.55537C12.0902 7.77612 12.5295 8.14996 12.8385 8.6296C13.1475 9.10925 13.3125 9.67315 13.3125 10.25C13.3125 11.0236 13.0162 11.7654 12.4887 12.3124C11.9613 12.8594 11.2459 13.1667 10.5 13.1667Z"
                fill="white"
              />
            </svg>
          </label>
          <input
            placeholder="Your Location"
            id="from"
            className="form__input-locator"
            disabled
          ></input>
        </div>
        <div className="form__group-locator">
          <label htmlFor="to" className="form__label-locator">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_105_5)">
                <circle
                  cx="14"
                  cy="13"
                  r="5.41667"
                  fill="#FF5959"
                  fillOpacity="0.63"
                />
                <circle
                  cx="14"
                  cy="13"
                  r="6.41667"
                  stroke="white"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_105_5"
                  x="0.583313"
                  y="0.583313"
                  width="26.8333"
                  height="26.8333"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="3" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_105_5"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_105_5"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </label>
          <input
            type="text"
            placeholder="To.."
            id="to"
            className="form__input-locator"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
          {text.length !== 0 ? (
            <div className="searchDiv" onClick={clickHandler}>
              <Button
                type="submit"
                id="search--div"
                className="searchLoc"
                variant="contained"
                onClick={search}
              >
                Find BEST Route
              </Button>
            </div>
          ) : null}
        </div>
      </div>

      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
      <div className="bottomDashboard">
        <div className="camBtn">
          <Link to="/add">
            <i className="fa-solid fa-camera cameraButton"></i>
          </Link>
        </div>
        <span className="rqi">RQI : </span>
        <span className="navbarScale">
          <span className="progress"></span>
        </span>
      </div>
    </>
  );
}
