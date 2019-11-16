import React from "../../node_modules/react";
import "../css/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-area">
        <div className="navbar-logo-section">
          <div className="navbar-logo-icon"></div>
          <p className="navbar-logo-text">samhulme.com</p>
        </div>
        <ul className="navbar-list">
          <li className="navbar-list-item">Home</li>
          <li className="navbar-list-item">Projects</li>
          <li className="navbar-list-item">Contact Me</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
