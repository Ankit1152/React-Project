import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />

      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <div className="navbar-right">
        <select>
          <option value="usd">USD</option>
          <option value="eur">EURO</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign Up <img src={arrow_icon} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
