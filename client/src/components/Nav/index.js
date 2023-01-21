
// autherization link to connect to log in and log out feature
// import Auth from "../../utils/auth";
//  using to link to login and log out function with autherization
import { Link } from "react-router-dom";

import "./Nav.css";

import React, { useState } from "react";


import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);



  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
      
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/game">Games</Link>
        </li>
        <li>
          <Link to="/login">Login In</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#000000" }} />
        ) : (
          <FaBars size={20} style={{ color: "#000000" }} />
        )}
      </div>
    </div>
  );
};

export default Nav;
