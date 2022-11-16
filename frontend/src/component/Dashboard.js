import React from "react";
import "./Dashboard.css";
import UnlSdk from "unl-map-js";
import Geohash from "latlon-geohash";

export default function Dashboard() {
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
      });
      var marker = new UnlSdk.Marker()
        .setLngLat([position.coords.longitude, position.coords.latitude])
        .addTo(map);
      const geohash = Geohash.encode(
        position.coords.latitude,
        position.coords.longitude,
        6
      );
      console.log(position.coords.latitude, position.coords.longitude, geohash);
    });
  }, []);

  return (
    <>
      <div className="locatorDashboard">
        <div className="form__group-locator">
          <label htmlFor="from" className="form__label-locator">From</label>
          <input placeholder="Your Location" id="from" className="form__input-locator" disabled></input>
        </div>
        <div className="form__group-locator">
          <label htmlFor="to" className="form__label-locator">To</label>
          <input type="text" placeholder="To.." id="to" className="form__input-locator"></input>
        </div>
      </div>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
      <div className="bottomDashboard">
        <div className="cc">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div className="camBtn">
            <i className="fa-solid fa-camera cameraButton"></i>
        </div>
        <div className="bottomNav">
            <i className="fa-solid fa-home homeButton"></i>
        </div>
      </div>
    </>
  );
}
