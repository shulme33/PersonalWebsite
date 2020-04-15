import React, { useEffect, useState } from "react";
import "../../App.css";
import Banner from "./Banner.jsx";
import MenuBar from "./MenuBar";
import Menu from "./Menu";
import CalorieTrackerApp from "../calorie-tracker/AppTracker.jsx";
import "../../fonts/Karla.ttf";
import "../../fonts/Reliable.otf";

const HomeApp = () => {
  /*
    Comments

    Main Colors:
      Cherry Red: #EA212D
      Dark Red:   #D41E29
      Grey:       #353535
      Off-White:  #F6F6F6

    React Elements:
      1.) NavBar (Element)
      2.) Picture Section (HTML in App)
      3.) Menu (Element)
          3a.) Each Menu (Element)
      4.) Menu Section (Element)
          4a.) SubMenus (Element)
      5.) Footer
  */

  const [currentMenuType, changeCurrentMenuType] = useState("About");
  const [showContactForm, changeShowContactForm] = useState(false);
  const [whichApplication, changeApplication] = useState("Home"); //Home, Tracker (Calorie Tracker)

  const changeMenuType = (newMenuType) => {
    changeCurrentMenuType(newMenuType);
  };

  const changeCurrentShowContactForm = () => {
    changeShowContactForm(!showContactForm);
  };

  const changeToCalorieTracker = () => {
    changeApplication("Tracker");
  };

  if (whichApplication === "Home") {
    //Home Screen
    return (
      <div className="App">
        <Banner showContactForm={showContactForm} />
        <MenuBar menuType={currentMenuType} menuChanged={changeMenuType} />
        <Menu menuType={currentMenuType} />
      </div>
    );
  } else if (whichApplication == "Tracker") {
    //Calorie Tracker
    return <CalorieTrackerApp />;
  }
};

export default HomeApp;
