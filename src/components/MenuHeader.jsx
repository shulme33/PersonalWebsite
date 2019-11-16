import React from "../../node_modules/react";
import "../css/menu-header.css";

const MenuHeader = ({ title, icon, clickFunction, currentMenu }) => {
  const clickEventHandler = () => {
    clickFunction(title);
  };

  const determineClasses = () => {
    let classes = "menu-header ";
    if (title === currentMenu) {
      classes += "menu-highlighted";
    }
    return classes;
  };

  let menuClasses = determineClasses();

  const variable = (
    <div className={menuClasses} onClick={clickEventHandler}>
      <div className="main-header-wrapper" data-container="body">
        <div className="main-header-icon"></div>
        <h3 className="main-header-title">{title}</h3>
      </div>
    </div>
  );

  return variable;
};

export default MenuHeader;
