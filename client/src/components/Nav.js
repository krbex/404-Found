import React from "react";

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <div className="">
      <p className="">
        <a
          href="#profile"
          onClick={() => handlePageChange("Profile")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "Profile" ? "nav-link active" : "nav-link"}
        >
          Profile
        </a>
      </p>
      <p className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange("Login")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Login" ? "nav-link active" : "nav-link"}
        >
          Login
        </a>
      </p>
      <p className="nav-item">
        <a
          href="#game"
          onClick={() => handlePageChange("Game")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Game" ? "nav-link active" : "nav-link"}
        >
          Games
        </a>
      </p>
      <p className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </p>
      <p className="nav-item">
        <a
          href="#shop"
          onClick={() => handlePageChange("Shop")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Shop" ? "nav-link active" : "nav-link"}
        >
          Shop
        </a>
      </p>
    </div>
  );
}
