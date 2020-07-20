import React from "react";
import "../css/css-global/structure.css";
import "../css/css-global/navbar.css";

/*

    Navigation bar that stretches across the top of website 

*/

function Navbar() {
  return (
    <div className="mp mp-fit mp-color-5 nb">
      <div className="imp nb-container">
        <div className="logo nb-logo"></div>
        <ul className="nb-item-list mp-txt-color-2">
          <a href="#id-work-section" className="nb-item">
            <li className="anim-upscale">History</li>
          </a>
          <a href="#id-skills-section" className="nb-item">
            <li className="anim-upscale">Skills</li>
          </a>
          <a href="#id-projects-section" className="nb-item">
            <li className="anim-upscale">Projects</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
