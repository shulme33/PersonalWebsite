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
          <li className="navbar-list-item">
            <a href={"https://github.com/shulme33"}>View My GitHub</a>
          </li>
          <li className="navbar-list-item">Contact Me</li>
        </ul>
      </div>
      <div className="in-progress-area">
        <p className="in-progress-text">
          Please note! This site is currently under construction. Some features
          may not yet be functional.
        </p>
      </div>
    </div>
  );
};

export default NavBar;
