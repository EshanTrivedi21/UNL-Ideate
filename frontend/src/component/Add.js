import React from 'react'
import styled from 'styled-components';
import {Link, useNavigate} from "react-router-dom";
import apiPost, { apiCheckLogin } from "../functions/basic";
import './Add.css';

export default function Add() {
    let [a, setA] = React.useState(null);
    let [user, setUser] = React.useState(null);
    let [image, setImage] = React.useState(null);
    let [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!a) { 
      apiCheckLogin(setA);
    }
  },[])
  React.useEffect(() => {
    if(a){
      if(a.err){
        navigate('/welcome');
      }
    }
  }, [a]);
  React.useEffect(() => {
    console.log(image);
    if(image){
        console.log(URL.createObjectURL(image));
        document.querySelector(".upload").style.background = `url(${URL.createObjectURL(image)})`;
        // document.querySelector("#file").disabled = true
    }
  }, [image]);
  return (
    <>
    <Container>
        <div className="addContent">
            <div className='upload'>
                <input type="file" name="file" id="file" className="inputfile" accept='.png, .jpg, .jpeg' onChange={(e)=>setImage(e.target.files[0])}/>
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
                placeholder="Password"
                id="password"
                className="form__input"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <label htmlFor="password" className="form__label">
                Password
              </label>
            </div>
        </div>
    </Container>
    </>
  )
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ebebeb;
  margin: 0;
  overflow: hidden;
  background: #f94d4d;
`;