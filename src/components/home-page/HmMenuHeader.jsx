import React, { useEffect, useState } from "react";
import "../../css/home-page/menu-header.css";

const HmMenuHeader = ({ title, icon, clickFunction, currentMenu }) => {
  const [iconClasses, changeIconClasses] = useState("icon-about");
  const [headerTitleClasses, changeHeaderTitleClasses] = useState(
    "main-header-title"
  );

  useEffect(() => {
    determineIconClasses();
    determineHeaderTitleClasses();
    determineMenuClasses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickEventHandler = () => {
    clickFunction(title);
  };

  window.addEventListener(
    "resize",
    () => {
      determineIconClasses();
      determineHeaderTitleClasses();
    },
    false
  );

  const determineMenuClasses = () => {
    let classes = "menu-header ";
    if (title === currentMenu) {
      classes += "menu-highlighted ";
    }

    if (window.innerWidth * 0.7 < 600) {
      classes += "menu-header-small";
    }
    return classes;
  };

  const determineIconClasses = () => {
    let classes = "main-header-icon ";
    switch (title.toUpperCase()) {
      case "ABOUT":
        classes += "icon-about ";
        break;
      case "PROJECTS":
        classes += "icon-projects ";
        break;
      case "RESUME":
        classes += "icon-resume ";
        break;
      default:
        throw new Error("Title Not Recognized");
    }

    if (window.innerWidth * 0.7 < 600) {
      classes += "icon-small";
    }
    changeIconClasses(classes);
  };

  const determineHeaderTitleClasses = () => {
    let classes = "main-header-title ";
    if (window.innerWidth * 0.7 < 600) {
      classes += "header-title-small";
    }
    changeHeaderTitleClasses(classes);
  };

  let menuClasses = determineMenuClasses();

  return (
    <div className={menuClasses} onClick={clickEventHandler}>
      <div className="main-header-wrapper" data-container="body">
        <div className={iconClasses}></div>
        <h3 className={headerTitleClasses}>{title}</h3>
      </div>
    </div>
  );
};

export default HmMenuHeader;
