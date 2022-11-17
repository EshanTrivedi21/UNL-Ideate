import React from "react";
import styled from "styled-components";
import "./Signup.css";
import { Button } from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import apiPost, { apiCheckLogin } from "../functions/basic";

export default function Signup() {
  let [a, setA] = React.useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!a) {
      apiCheckLogin(setA);
    }
    else{
      if(!a.err) navigate("/");
    }
  }, [a]);
  let [Username, setUsername] = React.useState("");
  let [Phone, setPhone] = React.useState("");
  let [Password, setPassword] = React.useState("");
  let [user, setUser] = React.useState(null);
  async function loginToApp(e) {
    e.preventDefault();
    await apiPost("auth/signup", {Username, Phone, Password }, setUser);
  }
  React.useEffect(() => {
    if(user){
      if(!user.err) navigate("/");
    }
  },[user])
  return (
    <>
      <Container>
        <Link to="/">
        <i className="fa-solid fa-arrow-left backBtnSignup"></i>
          </Link>
        <div className="signupContent">
          <div className="homeTitle">
            <Title>Register</Title>
            <Tagline>Create New Account</Tagline>
          </div>
          <form className="loginForm" onSubmit={(e) => loginToApp(e)}>
            <div className="form__group">
              <input
                type="text"
                placeholder="Username"
                id="username"
                className="form__input"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <label htmlFor="username" className="form__label">
                Username
              </label>
            </div>
            <div className="form__group">
              <input
                type="number"
                placeholder="Phone Number"
                id="number"
                className="form__input"
                onChange={(e) => setPhone(e.target.value)}
              ></input>
              <label htmlFor="number" className="form__label">
                Phone Number
              </label>
            </div>
            <div className="form__group">
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="form__input"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <label htmlFor="password" className="form__label">
                Password
              </label>
            </div>
            <div className="form__group">
              <input
                type="password"
                placeholder="Confirm Password"
                id="confirmpassword"
                className="form__input"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <label htmlFor="confirmpassword" className="form__label">
                Confirm Password
              </label>
            </div>
            <div className="buttonPrimary">
              <Button type="submit" variant="contained">
                Create Account
              </Button>
              <p className="textTertiary">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f94d4d;
  margin: 0;
  overflow: hidden;
`;
const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 30px;
  font-weight: 800;
  line-height: 70px;
  letter-spacing: 0.1em;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 5px 4px #0000005c;
`;
const Tagline = styled.div`
  font-size: 17.5px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.065em;
  transform: translateY(-25%);
  text-align: center;
  color: #d9d9d9;
  margin-bottom: 5vh;
`;
