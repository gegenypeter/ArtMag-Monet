import React, { useState } from "react";
import "../styles/Header.css"


const Login = () => {
    return (
        <form className="loginForm">
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <button>Sign in</button>
        </form>

)
}
const Register = () => {
    return (
        <form className="registerForm">
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <button>Register</button>
        </form>

)
}

const Header = () => {
    const [register, setRegister] = useState(false)
    const [signIn, setSignIn] = useState(false)


    return (
        <header>
            <div className="buttonDiv">
                <button onClick={()=>{setRegister(true);setSignIn(false)}}>Register</button>
                <button onClick={()=>{setSignIn(true);setRegister(false)}}>Sign in</button>
            </div>
            {signIn && <Login />}
            {register && <Register />}
        </header>
    )
}
export default Header