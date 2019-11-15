import React, { Component } from "react";
import "../css/menu.css";

const MenuAbout = () => {
  return (
    <div className="menu">
      <div className="menu-area">
        <div className="menu-name"></div>
        <div className="about-half">
          <div className="about-info"></div>
        </div>
        <div className="about-half">
          <div className="about-picture"></div>
        </div>
      </div>
    </div>
  );
};

export default MenuAbout;
