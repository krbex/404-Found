import React, { useState } from "react";
import Nav from "./Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Game from "./pages/Game";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";

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
