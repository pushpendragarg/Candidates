import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import HomeScreen from "./HomeScreen";

export default function Login() {
    const responseGoogle = (response) => {
        console.log(response);
      }
      const[showComp,setShowComp]=useState(false);
      const show=()=>{
          setShowComp(!showComp);
      }

  return (
    <div>
    <h1>Login</h1>
    <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    onClick={show}
  />
      {show?<HomeScreen/>:null}
    </div>
  );
}