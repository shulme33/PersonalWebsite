import React, { useEffect, useState } from "react";
import "../../App.css";
import Hm_Banner from "./Hm_Banner.jsx";
import MenuBar from "./Hm_MenuBar";
import Hm_Menu from "./Hm_Menu";
import Tr_App from "../calorie-tracker/Tr_App.jsx";
import "../../fonts/Karla.ttf";
import "../../fonts/Reliable.otf";

const Hm_App = () => {
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
        <Hm_Banner showContactForm={showContactForm} />
        <MenuBar menuType={currentMenuType} menuChanged={changeMenuType} />
        <Hm_Menu menuType={currentMenuType} />
      </div>
    );
  } else if (whichApplication == "Tracker") {
    //Calorie Tracker
    return <Tr_App />;
  }
};

export default Hm_App;
