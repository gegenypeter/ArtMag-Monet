import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"



const Header = () => {


    return (
        <header>
            <div className="buttonDiv">
                <Link to="/register"> <button>Register</button> </Link>
                <Link to="/login"> <button>Sign in</button> </Link>
            </div>
     
        </header>
    )
}
export default Header