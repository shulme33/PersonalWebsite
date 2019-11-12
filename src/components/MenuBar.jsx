import React, { Component } from "../../node_modules/react";
import MenuHeader from "../components/MenuHeader";
import "../css/menubar.css";

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <div className="menu-bar-area">
        <MenuHeader title="Resume" />
        <MenuHeader title="Projects" />
        <MenuHeader title="About" />
      </div>
    </div>
  );
};

export default MenuBar;
