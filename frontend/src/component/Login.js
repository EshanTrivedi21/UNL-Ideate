import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
export default function Login() {
  return (
    <>
      <Container>
        <Title>
            ALERT!!
        </Title>
        <Tagline>
            "We are here for you"
        </Tagline>
        <Button variant="contained">Hello World</Button>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #e86565;
  margin: 0;
`;
const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 46px;
  font-weight: 700;
  line-height: 69px;
  letter-spacing: 0em;
  text-align: center;
  color: #FFFFFF;
  text-shadow: 0px 5px 4px #0000005C;
`;
const Tagline = styled.div`
    /* font-family: Poppins; */
font-size: 21px;
font-style: italic;
font-weight: 500;
line-height: 32px;
letter-spacing: 0.065em;
text-align: center;
color: #D9D9D9
`
