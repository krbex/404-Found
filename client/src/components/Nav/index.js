
import React from "react";
import Auth from "../../utils/auth";



const Nav = () => {
  function showCurrent() {
    if (Auth.loggedIn()) {
      return (
        <ul>
          <a className="logout" href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </ul>
      );
    } else {
      return (
        <ul class="navigation">
          <li class="parent">
            <a class="link" href="/login">
              Login
            </a>
          </li>
          <li class="parent">
            <a class="link" href="/signup">
              Sign Up
            </a>
          </li>
        </ul>
      );
    }
  }

  return (
    <div>
      <nav class="navigationWrapper">
        <div class="logoWrapper">
          <span class="stylish SlidingText">Gaming</span>
          <span class="logo">Gods</span>
        </div>
        <ul class="navigation">
          <li class="parent">
            <a class="link" href="/">
              Home
            </a>
          </li>

          <li class="parent" id="clients">
            <a class="link" href="/game">
              <i class="fas fa-minus"></i> Games <i class="fas fa-plus"></i>
            </a>
          </li>
          <li class="parent">
            <a class="link" href="/profile">
              Profile
            </a>
          </li>
          {showCurrent()}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
