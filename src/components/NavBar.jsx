import React from "../../node_modules/react";
import "../css/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-area">
        <ul className="navbar-list">
          <li className="navbar-list-item">Home</li>
          <li className="navbar-list-item">Projects</li>
          <li className="navbar-list-item">Resume</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
