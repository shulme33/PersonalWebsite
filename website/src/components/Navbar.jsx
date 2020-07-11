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
        <div className="logo nb-logo"></div>
        <ul className="nb-item-list mp-txt-color-2">
          <li className="nb-item anim-upscale">Home</li>
          <li className="nb-item anim-upscale">Projects</li>
          <li className="nb-item anim-upscale">Resume</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
