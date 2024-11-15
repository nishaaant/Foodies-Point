import { LOGO_URL } from "../utils.js/constants";
import { useState } from "react";


const Header = () => {
    const [btnNameReact , setBtnNameReact] = useState("Login")
    return(
        <div className="header">
            <div className="logo-container">
                <img 
                className = "logo-img"
                src = {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>About Us</li>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Cart</li>
                        <button 
                        className="login-button" 
                        onClick={() => {
                            btnNameReact == "Login" 
                        ? setBtnNameReact("Logout") 
                        : setBtnNameReact("Login")
                        }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;