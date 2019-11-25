import React, { useEffect, useState } from "../../node_modules/react";
import "../css/menu-header.css";

const MenuHeader = ({ title, icon, clickFunction, currentMenu }) => {
  const [iconClasses, changeIconClasses] = useState("icon-about");

  useEffect(() => {
    determineIconClasses();
  }, []);

  const clickEventHandler = () => {
    clickFunction(title);
  };

  const changeCurrentIconClasses = () => {
    changeIconClasses("icon-about");
  };

  const determineMenuClasses = () => {
    let classes = "menu-header ";
    if (title === currentMenu) {
      classes += "menu-highlighted";
    }
    return classes;
  };

  const determineIconClasses = () => {
    console.log("Icon Classes: " + title.toUpperCase());
    let classes = "main-header-icon ";
    switch (title.toUpperCase()) {
      case "ABOUT":
        classes += "icon-about";
        break;
      case "PROJECTS":
        classes += "icon-projects";
        break;
      case "RESUME":
        console.log("BROO");
        classes += "icon-resume";
        break;
    }
    return classes;
  };

  let menuClasses = determineMenuClasses();

  const variable = (
    <div className={menuClasses} onClick={clickEventHandler}>
      <div className="main-header-wrapper" data-container="body">
        <div className={iconClasses}></div>
        <h3 className="main-header-title">{title}</h3>
      </div>
    </div>
  );

  return variable;
};

export default MenuHeader;
