import React from "react";
// autherization link to connect to log in and log out feature
import Auth from "../../utils/auth";
//  using to link to login and log out function with autherization
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="">
      <p className="">
        <a href="/profile">Profile</a>
      </p>
      <p className="nav-item">
        <a href="/login">Login</a>
      </p>
      <p className="nav-item">
        <a href="/game">Games</a>
      </p>
      <p className="nav-item">
        <a href="/home">Home</a>
      </p>
      <p className="nav-item">
        <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default Nav;
