import React, { Component } from "react";
import "../css/menu.css";

const MenuProjects = () => {
  return (
    <div className="menu">
      <div className="menu-area">
        <div className="menu-name"></div>
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

export default MenuProjects;
