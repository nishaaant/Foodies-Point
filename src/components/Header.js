import { LOGO_URL } from "../utils.js/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils.js/useOnlineStatus";
import UserContext from "../utils.js/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  // Blur effect
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        isBlurred ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-[#F4F6FF] shadow-md"
      }`}
    >
      <div
        className={`p-4 w-full h-24 flex justify-between items-center border-b-2 border-[#10375C] text-[#10375C] font-ubuntu transition-all duration-300`}
      >
        {/* Logo */}
        <div className="logo-container w-28 mx-4">
          <Link to={"/"} className="custom-link">
            <img className="logo-img w-full" src={LOGO_URL} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Items */}
        <div className="nav-items">
          <ul className="flex items-center gap-6">
            <li className="font-bold flex items-center">
              <span>Status:</span>
              <span className="ml-1">{onlineStatus ? "🟢" : "🔴"}</span>
            </li>
            <li className="font-bold hover:text-blue-700">
              <Link to={"/"} className="custom-link">
                Home
              </Link>
            </li>
            <li className="font-bold hover:text-blue-700">
              <Link to={"/about"} className="custom-link">
                About Us
              </Link>
            </li>
            <li className="font-bold hover:text-blue-700">
              <Link to={"/contact"} className="custom-link">
                Contact
              </Link>
            </li>
            <li className="mx-2 px-4 py-2 bg-[#FF6F61] text-[#10375C] rounded-lg border-2 border-[#10375C] hover:bg-[#E9EEF2] hover:text-[#10375C] transition-all duration-200">
              <Link to={"/cart"} className="custom-link">
                Cart - {cartItems.length}
              </Link>
            </li>
            <button
              className="mx-6 px-4 py-1 bg-[#10375C] text-white rounded-lg border-2 border-[#10375C] hover:bg-slate-200 hover:text-[#10375C] transition-all duration-300"
              onClick={() => {
                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
              }}
            >
              {btnNameReact}
            </button>
            <li className="px-4 py-2 bg-[#35e22c] text-[#10375C] rounded-lg border-2 border-[#10375C] hover:bg-gray-200 transition-all duration-300">
              {loggedInUser}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
