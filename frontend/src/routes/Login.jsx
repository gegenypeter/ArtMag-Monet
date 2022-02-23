import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


const Login = (props) => {
  const {authEmail, authPassword, setAuthEmail, setAuthPassword, isLoggedIn, setIsLoggedIn} = props;

  
  const login = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/login",
        {},
        {
          headers: {
            authorization: authEmail + ":::" + authPassword,
          },
        }
        );
        setIsLoggedIn(true);
        console.log(response);
        localStorage.setItem("sessionId", response.data);
      } catch (err) {
        alert("Wrong email or password");
      }
    };
    
    const signout = async () => {
     try {
       await axios.delete('http://localhost:4000/api/login', {
       }, {
         headers: {
           authorization: authEmail + ':::' + authPassword
         }
       })}
     catch (err) {}
     finally{
       localStorage.removeItem("sessionId")
     }
    
    }


  return (
    <>
      {isLoggedIn && <Navigate to="/" />} 
      (
        <div className="Login">
          <form className="loginForm">
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
            <button onClick={() => login()}>Sign in</button>
            <button onClick={() => signout()}>Sign out</button>
          </form>
        </div>
        
      )
    </>
  );
};

export default Login;
