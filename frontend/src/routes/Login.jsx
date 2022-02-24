import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { logIn } from "../api/middleProvider"


const Login = (props) => {

  const {setAuthEmail, isLoggedIn, setIsLoggedIn, setUserArtworks} = props;

  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");

const logInClick = async () => {
  await setIsLoggedIn(await logIn(setAuthEmail, emailText, passwordText, setUserArtworks))
}

return (
    <>
      {isLoggedIn && <Navigate to="/"/>}
        <div className="Login">
          <div className="loginForm">
            <h1 className="login">Login</h1>
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmailText(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPasswordText(e.target.value)}
            ></input>
            <button onClick={() => logInClick()}>Login</button>
          </div>
        </div>
    </>
  );
};

export default Login;
