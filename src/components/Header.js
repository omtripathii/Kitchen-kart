import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { CART_HEAD_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = ()=>{
    const[loginbtn,setLoginbtn] = useState("Login");
    return(
        <div className="Header">
            <div className="logo">
                <img src = {LOGO_URL} alt="logo not loaded" />
            </div>
            <div className="nav-items">
                <ul className="list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><img src={CART_HEAD_LOGO} alt="basket cart icon" /></li>
                    <button className="loginout" onClick={
                        ()=>{
                           loginbtn === "Login" ? 
                           setLoginbtn("Logout") :
                           setLoginbtn("Login")

                        }
                    }>{loginbtn}</button>
                </ul>
            </div>
        </div>
    );
}
export default Header;