import React from "react";
import axios from "axios";
import { useState } from "react";
import Home from "./Home";

const Login = () => {
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [displayPage, setDisplayPage] = useState("Logi");
  console.log(displayPage);
  
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
        setDisplayPage("Home");
        console.log(response);
        localStorage.setItem("sessionId", response.data);
      } catch (err) {
        alert("Wrong Email or password");
      }
    };
    
    const signout = async () => {
     try {
       const response = await axios.delete('http://localhost:4000/api/login', {
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
      {displayPage === "Home" ? <Home /> : 
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
        
      )}
    </>
  );
};

export default Login;
