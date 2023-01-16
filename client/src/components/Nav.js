import React from "react";

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <div className="nav flex flex-row justify-end space-x-4">
      <p className="nav-item">
        <a
          href="#profile"
          onClick={() => handlePageChange("Profile")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "Profile" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </p>
      <p className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange("Login")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Login" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </p>
      <p className="nav-item">
        <a
          href="#Game"
          onClick={() => handlePageChange("Game")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Game" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </p>
      {/* <p className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </p> */}
    </div>
  );
}
