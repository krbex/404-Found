import React, { useState } from "react";
import Nav from "./Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Game from "./pages/Game";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

export default function SiteContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Shop") {
      return <Shop />;
    }
    if (currentPage === "Game") {
      return <Game />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    if (currentPage === "Profile") {
      return <Profile />;
    }
    if (currentPage === "Signup") {
      return <Signup />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
    </div>
  );
}
