import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css"



const Header = () => {

    return (
        <header>
            <NavLink to="/collection">
                <button className="myCollection">My collection</button>
            </NavLink>
            <NavLink to="/">
                <button className="homeButton">Home</button>
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