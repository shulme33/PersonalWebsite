import React from "react";
import "../css/css-global/structure.css";
import "../css/css-global/navbar.css";

/*

    Navigation bar that stretches across the top of website 

*/

function Navbar() {
  return (
    <div className="mp mp-tiny mp-color-5">
      <div className="imp nb-container">
        <div className="nb-logo">Logo</div>
        <ul className="nb-item-list">
          <li className="nb-item">Home</li>
          <li className="nb-item">Projects</li>
          <li className="nb-item">Resume</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
