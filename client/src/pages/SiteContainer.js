import React, { useState } from "react";
// import Navbar from "";

export default function SiteContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
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
    if (currentPage === "Shop") {
      return <Shop />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
    </div>
  );
}
