import React from "react";
// didnt import this right at all lol
import "./Footer.css";
import {
    FaHome,
    FaPhone,
    FaLinkedin,
    FaMailBulk,

} from "react-icons/fa";

const Footer = () => {
    return (
      <div className="footer">
          <div className="footer-container">
              <div className="left">
                  <div className="location">
                      <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                      <div>
                          <p>Austin</p>
                          <p>Texas</p>
                      </div>
                  </div>
                  <div className="phone" >
                      <h4>
                          <FaPhone
                          size={20}
                          style={{ color: "white", marginRight: "2rem" }}
                          />
                          (281)330-8004
                      </h4>
                  </div>
                  
              </div>
              <div className="right">
              <h4>About the Company</h4>
              <p>
              Under the funding of 404 Found, the brilliant minds at Gamer Gods have created the best Commercial/Indie Game Purchasing App on the market!
              </p>
              <div className="social">
              <FaMailBulk
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;