import React from "../../node_modules/react";
import MenuHeader from "../components/MenuHeader";
import "../css/menubar.css";

const MenuBar = ({ menuType, menuChanged }) => {
  return (
    <div className="menu-bar">
      <div className="menu-bar-area">
        <MenuHeader
          title="Resume"
          icon="resume.svg"
          clickFunction={menuChanged}
          currentMenu={menuType}
        />
        <MenuHeader
          title="About"
          icon="about.svg"
          clickFunction={menuChanged}
          currentMenu={menuType}
        />
        <MenuHeader
          title="Projects"
          icon="projects.svg"
          clickFunction={menuChanged}
          currentMenu={menuType}
        />
      </div>
    </div>
  );
};

export default MenuBar;
