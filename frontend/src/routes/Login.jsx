import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { logIn } from "../api/middleProvider"


const Login = (props) => {
  const {authEmail, authPassword, setAuthEmail, setAuthPassword, isLoggedIn, setIsLoggedIn} = props;


const logInClick = async () => {
  setIsLoggedIn(await logIn(authEmail, authPassword))
}

return (
    <>
      {isLoggedIn && <Navigate to="/" />}
        <div className="Login">
          <div className="loginForm">
            <h1 className="login">Login</h1>
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setAuthEmail(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setAuthPassword(e.target.value)}
            ></input>
            <button onClick={() => logInClick()}>Sign in</button>
          </div>
        </div>
    </>
  );
};

export default Login;
