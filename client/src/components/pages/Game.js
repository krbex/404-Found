import React from "react";
import blacktail from "../../assets/blacktail.webp";

export default function Game() {
  return (
    <div>
      <h2>Games we 100% made on our own</h2>
      <div>
        <div>
          <h3>Blacktail</h3>
          <img src={blacktail} alt="Blacktail cover art"></img>
        </div>
      </div>
    </div>
  );
}
