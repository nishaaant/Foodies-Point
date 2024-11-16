import { LOGO_URL } from "../utils.js/constants";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    const [btnNameReact , setBtnNameReact] = useState("Login")
    return(
        <div className="header">
            <div className="logo-container">
                <Link to={"/"} className="custom-link"><img 
                className = "logo-img"
                src = {LOGO_URL} /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to={"/"} className="custom-link">Home</Link></li>
                    <li><Link to={"/about"} className="custom-link">About Us</Link></li>
                    <li><Link to={"/contact"} className="custom-link">Contact</Link></li>
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