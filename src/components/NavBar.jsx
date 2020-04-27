import React, { useEffect, useState } from "react";
import "../css/home-page/navbar.css";

const NavBar = ({
  showContactForm,
  contactClicked,
  trackerClicked,
  homeClicked,
}) => {
  const [logoClasses, changeCurrentLogoClasses] = useState(
    "navbar-logo-section"
  );
  const [listClasses, changeCurrentListClasses] = useState("navbar-list");
  const [listItemClasses, changeCurrentListItemClasses] = useState(
    "navbar-list-item"
  );

  useEffect(() => {
    const smallScreen = window.innerWidth * 0.7 < 600;
    changeLogoClasses(smallScreen);
    changeListClasses(smallScreen);
    changeListItemClasses(smallScreen);
  }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

  window.addEventListener(
    "resize",
    () => {
      const smallScreen = window.innerWidth * 0.7 < 600;
      changeLogoClasses(smallScreen);
      changeListClasses(smallScreen);
      changeListItemClasses(smallScreen);
    },
    false
  );

  const changeLogoClasses = (blnSmallScreen) => {
    if (blnSmallScreen) {
      changeCurrentLogoClasses("navbar-logo-section-small");
    } else {
      changeCurrentLogoClasses("navbar-logo-section");
    }
  };

  const changeListClasses = (blnSmallScreen) => {
    if (blnSmallScreen) {
      changeCurrentListClasses("navbar-list-small");
    } else {
      changeCurrentListClasses("navbar-list");
    }
  };

  const changeListItemClasses = (blnSmallScreen) => {
    if (blnSmallScreen) {
      changeCurrentListItemClasses("navbar-list-item-small");
    } else {
      changeCurrentListItemClasses("navbar-list-item");
    }
  };

  const clickContactMe = () => {
    console.log("Clicked");
    contactClicked();
  };

  return (
    <div className="navbar">
      <div className="navbar-area">
        <div className={logoClasses}>
          <div className="navbar-logo-icon"></div>
          <p className="navbar-logo-text">samhulme.com</p>
        </div>
        <ul className={listClasses}>
          <li
            className={listItemClasses + " list-item-github"}
            onClick={homeClicked}
          >
            Home
          </li>
          <li
            className={listItemClasses + " list-item-github"}
            onClick={trackerClicked}
          >
            Calorie Tracker
          </li>
          <li className={listItemClasses + " list-item-github"}>
            <a href={"https://github.com/shulme33"}>View My GitHub</a>
          </li>
          <li
            className={listItemClasses + " list-item-contact"}
            onClick={clickContactMe}
          >
            Contact Me
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
