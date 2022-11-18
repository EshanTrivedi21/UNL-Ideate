import React, { useState } from "react";
import "./Profile.css";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import apiPost, { apiCheckLogin } from "../functions/basic.js";
import { Button } from "@mui/material";
// import { Container } from "@mui/system";

export default function Profile() {
  let [a, setA] = React.useState(null);
  let [user, setUser] = React.useState(null);

  const navigate = useNavigate();
  React.useEffect(() => {
    apiPost("get/user",{}, setUser);
  }, []);
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
  return (
    <>
      {user ? (
        <>
          {!user.err ? (
            <Container>
              <Link to="/">
                <i className="fa-solid fa-arrow-left backBtnSignup"></i>
              </Link>
              <div className="profileTitle">PROFILE</div>
              <div className="profileContainer">
                <div className="form__group-profile">
                  <label className="form__label-profile">Username</label>
                  <input
                    className="form__input-profile"
                    value={user.user.Username}
                    disabled
                  ></input>
                </div>
                <div className="form__group-profile">
                  <label className="form__label-profile">Phone Number</label>
                  <input
                    className="form__input-profile"
                    value={user.user.Phone}
                    disabled
                  ></input>
                </div>
                <div className="form__group-profile">
                  <label className="form__label-profile">Reward Wallet</label>
                  <input
                    className="form__input-profile"
                    value={user.user.reward}
                    disabled
                  ></input>
                </div>
                <div className="form__group-profile">
                  <label className="form__label-profile">Rewards Stars</label>
                  <input
                    className="form__input-profile"
                    value={"⭐⭐⭐⭐"}
                    disabled
                  ></input>
                </div>
              </div>
              <div className="buttonDiv">
                <Button>Redeem Rewards</Button>
                <div className="logout">
                  <Link to="/logout">
                    <Button type="submit" variant="contained">
                      Logout
                    </Button>
                  </Link>
                </div>
              </div>
            </Container>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
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
