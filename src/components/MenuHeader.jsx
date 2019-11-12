import React, { Component } from "../../node_modules/react";
import "../css/menu-header.css";

const MenuHeader = ({ title, icon }) => {
  //<h3 className="main-header-title">{title}</h3>
  return (
    <div className="menu-header">
      <div className="main-header-wrapper">
        <div className="main-header-icon"></div>
        <h3 className="main-header-title">{title}</h3>
      </div>
    </div>
  );
};

export default MenuHeader;
