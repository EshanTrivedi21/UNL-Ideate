import React from "react";
import styled from "styled-components";
import "./Login.css";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import apiPost, { apiCheckLogin } from "../functions/basic";

export default function Login() {
  let [a, setA] = React.useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!a) {
      apiCheckLogin(setA);
    } else {
      if (!a.err) navigate("/");
    }
  }, [a]);
  let [Phone, setPhone] = React.useState("");
  let [Password, setPassword] = React.useState("");
  let [user, setUser] = React.useState(null);
  async function loginToApp(e) {
    e.preventDefault();
    await apiPost("auth/login", { Phone, Password }, setUser);
  }
  React.useEffect(() => {
    if (user) {
      if (!user.err) navigate("/");
    }
  }, [user]);
  return (
    <>
      <Container>
        <Link to="/">
          <i className="fa-solid fa-arrow-left backBtn"></i>
        </Link>
        <div></div>
        <div className="loginContent">
          <div className="homeTitle">
            <Title>Welcome Back</Title>
            <Tagline>Login to your Account</Tagline>
          </div>
          <form className="loginForm" onSubmit={(e) => loginToApp(e)}>
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
            <div className="buttonPrimary">
              <Button type="submit" variant="contained">
                Login
              </Button>
              <p className="textTertiary">
                Don't have an account? <Link to="/signup">Sign up</Link>
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
  background: #ebebeb;
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
