import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import { logOut } from "../api/middleProvider";

const Header = (props) => {

    const {isLoggedIn, authEmail, authPassword, setIsLoggedIn} = props;

    const logOutClick = () => {
        logOut(authEmail, authPassword);
        setIsLoggedIn(false);
    }

    return (
        <header>
            <NavLink to="/collection">
                {isLoggedIn && <button className="myCollection">My collection</button>}
            </NavLink>
            <NavLink to="/">
                <button className="homeButton">Home</button>
                {isLoggedIn && <button className="Logout" onClick={logOutClick}>Log out</button>}
            </NavLink>
            <div className="buttonDiv">
                <NavLink to="/register">
                   {!isLoggedIn && <button>Register</button>}
                </NavLink>
                <NavLink to="/login">
                    {!isLoggedIn && <button>Log in</button>}
                </NavLink>
            </div>

        </header>
    )
}
export default Header