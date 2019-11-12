import React, { Component } from "../../node_modules/react";
import "../css/menu-header.css";

const MenuHeader = ({ title }) => {
  return (
    <div className="menu-header">
      <h3 className="main-header-title">{title}</h3>
    </div>
  );
};

export default MenuHeader;
