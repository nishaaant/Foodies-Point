import { LOGO_URL } from "../utils.js/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils.js/useOnlineStatus";
import UserContext from "../utils.js/UserContext";


const Header = () => {
    const [btnNameReact , setBtnNameReact] = useState("Login")
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext)
    return(
        <div className="header flex justify-between items-center bg-[#51abb2] shadow-2xl border-b-2 border-[#424242] text-[#424242] font-ubuntu">
            <div className="logo-container w-28 mx-4">
                <Link to={"/"} className="custom-link"><img 
                className = "logo-img"
                src = {LOGO_URL} /></Link>
            </div>
            <div className="nav-items">
                <ul className="flex">
                    <li className="px-4 font-bold">Status : {onlineStatus ? "🟢":"🔴"}</li>
                    <li className="px-4 font-bold"><Link to={"/"} className="custom-link">Home</Link></li>
                    <li className="px-4 font-bold"><Link to={"/about"} className="custom-link">About Us</Link></li>
                    <li className="px-4 font-bold"><Link to={"/contact"} className="custom-link">Contact</Link></li>
                    <li className="px-4 font-bold"><Link to={"/cart"} className="custom-link">Cart</Link></li>
                    <button className="login-button mx-6 px-4 py-1 bg-[#424242] rounded-md border-2 border-[#424242] text-slate-200 hover:bg-slate-200 hover:text-[#424242]" 
                        onClick={() => {
                            btnNameReact == "Login" 
                            ? setBtnNameReact("Logout") 
                            : setBtnNameReact("Login")
                        }}>{btnNameReact}
                    </button>
                        <li className="mx-2 px-4 py-2 bg-green-300 text-[#424242] rounded-md border-2 border-[#424242] hover:bg-slate-200 hover:text-[#424242]">
                            {loggedInUser}
                        </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;