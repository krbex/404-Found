import React from "react";

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
        <a href="/shop">Shop</a>
      </p>
    </div>
  );
};

export default Nav;
