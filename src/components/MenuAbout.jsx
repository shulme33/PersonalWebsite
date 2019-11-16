import React, { Component } from "react";
import "../css/menu.css";

const MenuAbout = () => {
  return (
    <div className="menu">
      <div className="menu-area">
        <div className="menu-name">
          <h1 className="menu-name-text">About Me</h1>
          <div className="menu-name-underline"></div>
        </div>
        <div className="about-half about-info"></div>
        <div className="about-half">
          <div className="about-picture-border">
            <div className="about-picture"></div>
          </div>
        </div>
        <div className="about-half">
          <div className="about-picture-border">
            <div className="about-picture"></div>
          </div>
        </div>
        <div className="about-half about-info"></div>
      </div>
    </div>
  );
};

export default MenuAbout;
