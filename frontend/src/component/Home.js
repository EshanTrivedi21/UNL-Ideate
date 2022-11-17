import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";
import homepagesvg from "../assets/homepage.svg";
import "./Home.css";
import { apiCheckLogin } from "../functions/basic";

export default function Home() {
  let [a, setA] = React.useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!a) {
      apiCheckLogin(setA);
    }
    else{
      if(!a.err) navigate("/");
    }
  }, [a]);
  return (
    <>
      <div>
        <Container>
          <div className="homeSVG">
            <img src={homepagesvg} alt="illustration" />
          </div>
          <div className="homeIntro">
            <div className="homeTitle">
              <Title>POTHOLES</Title>
              <Tagline>"We will save you from them!"</Tagline>
            </div>
            <div className="buttonPrimaryMain">
              <Link to="/login">
                <Button variant="contained">Login</Button>
              </Link>
            </div>
            <div className="buttonSecondaryMain">
              <Link to="/signup">
                <Button variant="contained">Sign Up</Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f94d4d;
  margin: 0;
  overflow: hidden;
  a {
    text-decoration: none;
    color: #242424;
  }
`;
const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 40px;
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
  text-align: center;
  color: #d9d9d9;
  margin-bottom: 5vh;
`;
