import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import apiPost, { apiCheckLogin } from "../functions/basic";
import "./Add.css";
import { Button } from "@mui/material";

export default function Add() {
  // const [text, setText] = useState("");

  let [a, setA] = React.useState(null);
  let [user, setUser] = React.useState(null);
  let [Image, setImage] = React.useState(null);
  let [Address, setAddress] = React.useState("");
  let [Problem, setProblem] = React.useState("");
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!a) {
      apiCheckLogin(setA);
    }
  }, []);
  React.useEffect(() => {
    if (a) {
      if (a.err) {
        navigate("/welcome");
      }
    }
  }, [a]);
  React.useEffect(() => {
    if (Image) {
      console.log(URL.createObjectURL(Image));
      document.querySelector(
        ".upload"
      ).style.background = `url(${URL.createObjectURL(Image)})`;
      // document.querySelector("#file").disabled = true
    }
  }, [Image]);
  function handleSubmit(e){
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
        let data = new FormData();
        data.append("Image", Image);
        data.append("Address", Address);
        data.append("Problem", Problem);
        data.append("lat", position.coords.latitude);
        data.append("lng", position.coords.longitude);
        apiPost("add/pothole", data, setUser);
    })
  }
  return (
    <>
      <Container>
        <Link to="/">
          <i className="fa-solid fa-arrow-left backBtnSignup"></i>
        </Link>
        <form className="addContent" onSubmit={(e)=> handleSubmit(e)}>
          <div className="upload">
            <input
              type="file"
              name="file"
              id="file"
              className="inputfile"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => setImage(e.target.files[0])}
            />
            {/* {Image.files.length ? (
              <div className="uploadContent">
                <p>Upload Image</p>
              </div>
            ) : null} */}
          </div>
          <div className="form__group-add">
            <textarea
              type="text"
              placeholder="Problem Faced"
              id="Problem Faced"
              className="form__input"
              onChange={(e) => setProblem(e.target.value)}
            ></textarea>
            <label htmlFor="Problem Faced" className="form__label">
              Problem Faced 
            </label>
          </div>
          <div className="form__group-add">
            <textarea
              type="text"
              placeholder="Address"
              id="Address"
              className="form__input"
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
            <label htmlFor="Address" className="form__label">
              Address
            </label>
          </div>
          <Button type="submit" variant="contained">
            Submit   
          </Button>
        </form>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ebebeb;
  margin: 0;
  overflow: hidden;
  background: #f94d4d;
`;
