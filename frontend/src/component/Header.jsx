import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css"



const Header = () => {

    return (
        <header>
            <NavLink to="/">
                <button className="homeButton">Home</button>
                <button className="Logout">Logout</button>
            </NavLink>
            <div className="buttonDiv">
                <NavLink to="/register">
                    <button>Register</button>
                </NavLink>
                <NavLink to="/login">
                    <button>Sign in</button>
                </NavLink>
            </div>

        </header>
    )
}
export default Header