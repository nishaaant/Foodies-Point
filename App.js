import React from "react";
import ReactDOM from "react-dom/client";


//Header
const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img 
                className = "logo-img"
                src="https://www.logomaker.com/api/main/images/1j_ojFVGOMkX9W_reBe4hGff0anU9UIMhX6SjmAvfGxL_BkwyXQghPto9...s...LQtAuAUGgwJRJ4EwiTI_D9lUyU9o...jiPMYtAXH9...zzxSCKtUTh9...LEqTFPyYp1R_j_Yh1MwVpVqUdDG7HnjYe50RLZudra1...A54qmjOObS405mRjU_VENMiPBosmg965RuFL5mvCF9dhcbXpR42kVTxCkTI1KKkftoYb" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>About Us</li>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const Applayout = () => {
    return (
        <div className="mainapp">
            <Header />
        </div>
    )
};
//connecting ReactDOM root
const root = ReactDOM.createRoot(document.getElementById("root"));
//to render
root.render(<Applayout/>);