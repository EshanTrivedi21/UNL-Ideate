import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import Button from '@mui/material/Button';
import homepagesvg from '../assets/homepage.svg';
import "./Home.css"

export default function Home() {
  return (
    <>
      <div>
        <Container>
        <div className="homeSVG">
          <img src={homepagesvg} alt="illustration"/>
        </div>
        <div className="homeIntro">
          <div className="homeTitle">
            <Title>
                POTHOLES
            </Title>
            <Tagline>
                "We will save you from them!"
            </Tagline>
          </div>
          <div className="buttonPrimaryMain">
          <Link to="/login"><Button variant="contained">Login</Button></Link>
          </div>
          <div className="buttonSecondaryMain">
          <Link to="/signup"><Button variant="contained">Sign Up</Button></Link>
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
  background: #F94D4D;
  margin: 0;
  overflow: hidden;
  a{
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
  color: #FFFFFF;
  text-shadow: 0px 5px 4px #0000005C;
`;
const Tagline = styled.div`
font-size: 17.5px;
font-weight: 500;
line-height: 32px;
letter-spacing: 0.065em;
text-align: center;
color: #D9D9D9;
margin-bottom:5vh;
`
