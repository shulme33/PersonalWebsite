import React, { useEffect, useState } from "react";
import "../css/navbar.css";

const NavBar = () => {
  const [logoClasses, changeCurrentLogoClasses] = useState(
    "navbar-logo-section"
  );
  const [listClasses, changeCurrentListClasses] = useState("navbar-list");
  const [listItemClasses, changeCurrentListItemClasses] = useState(
    "navbar-list-item"
  );

  useEffect(() => {
    const smallScreen = window.innerWidth * 0.7 < 600;
    console.log(window.innerWidth);
    changeLogoClasses(smallScreen);
    changeListClasses(smallScreen);
    changeListItemClasses(smallScreen);
  }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

  window.addEventListener(
    "resize",
    () => {
      const smallScreen = window.innerWidth * 0.7 < 600;
      console.log(window.innerWidth);
      changeLogoClasses(smallScreen);
      changeListClasses(smallScreen);
      changeListItemClasses(smallScreen);
    },
    false
  );

  const changeLogoClasses = blnSmallScreen => {
    const largeLogoClasses = "navbar-logo-section";
    const smallLogoClasses = "navbar-logo-section-small";

    if (blnSmallScreen) {
      changeCurrentLogoClasses("navbar-logo-section-small");
    } else {
      changeCurrentLogoClasses("navbar-logo-section");
    }
  };

  const changeListClasses = blnSmallScreen => {
    if (blnSmallScreen) {
      changeCurrentListClasses("navbar-list-small");
    } else {
      changeCurrentListClasses("navbar-list");
    }
  };

  const changeListItemClasses = blnSmallScreen => {
    if (blnSmallScreen) {
      changeCurrentListItemClasses("navbar-list-item-small");
    } else {
      changeCurrentListItemClasses("navbar-list-item");
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-area">
        <div className={logoClasses}>
          <div className="navbar-logo-icon"></div>
          <p className="navbar-logo-text">samhulme.com</p>
        </div>
        <ul className={listClasses}>
          <li className={listItemClasses}>
            <a href={"https://github.com/shulme33"}>View My GitHub</a>
          </li>
          <li className={listItemClasses}>Contact Me</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
