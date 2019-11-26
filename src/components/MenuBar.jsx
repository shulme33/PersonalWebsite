import React, { useEffect, useState } from "../../node_modules/react";
import MenuHeader from "../components/MenuHeader";
import "../css/menubar.css";

const MenuBar = ({ menuType, menuChanged }) => {
  const [menubarAreaClasses, changeMenuBarClasses] = useState("menu-bar-area");

  useEffect(() => {
    determineCurrentMenuBarClasses();
  }, []);

  const determineCurrentMenuBarClasses = () => {
    let classes = "menu-bar-area ";

    if (window.innerWidth * 0.7 < 600) {
      classes += "menu-bar-area-small ";
    }

    changeMenuBarClasses(classes);
  };

  return (
    <div className="menu-bar">
      <div className={menubarAreaClasses}>
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
