import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css"
import axios from "axios";



const Header = (props) => {

    const {isLoggedIn, authEmail, authPassword, setIsLoggedIn} = props;

    const signout = async () => {
        try {
          await axios.delete('http://localhost:4000/api/login', {
          }, {
            headers: {
              authorization: authEmail + ':::' + authPassword
            }
          })
        }
        catch (err) {}
        finally{
            localStorage.removeItem("sessionId")
            setIsLoggedIn(false)
        }
       
       }
   

    return (
        <header>
            <NavLink to="/collection">
                {isLoggedIn && <button className="myCollection">My collection</button>}
            </NavLink>
            <NavLink to="/">
                <button className="homeButton">Home</button>
                {isLoggedIn && <button className="Logout" onClick={signout}>Log out</button>}
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