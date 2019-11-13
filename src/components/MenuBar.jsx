import React from "../../node_modules/react";
import MenuHeader from "../components/MenuHeader";
import "../css/menubar.css";

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <div className="menu-bar-area">
        <MenuHeader title="Resume" icon="resume.svg" />
        <MenuHeader title="Projects" icon="projects.svg" />
        <MenuHeader title="About" icon="about.svg" />
      </div>
    </div>
  );
};

export default MenuBar;
