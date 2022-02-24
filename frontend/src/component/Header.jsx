import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import { logOut } from "../api/middleProvider";

const Header = (props) => {

    const {isLoggedIn, authEmail, authPassword, setIsLoggedIn, setUserArtworks} = props;

    const navigate = useNavigate();

    const logOutClick = () => {
        logOut(authEmail, authPassword, setUserArtworks);
        setIsLoggedIn(false);
        navigate("/");
    }

    return (
        <header>
            <NavLink to="/">
                <button className="homeButton">Home</button>
            </NavLink>

            {isLoggedIn && <>
                <NavLink to="/collection">
                    <button className="myCollection">My collection</button>
                </NavLink>
                <p>{authEmail}</p>
                <button className="Logout" onClick={logOutClick}>Log out</button>
            </>}

            {!isLoggedIn &&
            <div className="buttonDiv">
                <NavLink to="/register">
                   <button>Register</button>
                </NavLink>
                <NavLink to="/login">
                    <button>Log in</button>
                </NavLink>
            </div>
            }

        </header>
    )
}
export default Header