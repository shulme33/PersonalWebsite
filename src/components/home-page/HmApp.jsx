import React, { useState } from "react";
import "../../App.css";
import HmBanner from "./HmBanner.jsx";
import HmMenuBar from "./HmMenuBar";
import HmMenu from "./HmMenu";
//import Tr_App from "../calorie-tracker/Tr_App.jsx";
import "../../fonts/Karla.ttf";
import "../../fonts/Reliable.otf";

const HmApp = () => {
  const [currentMenuType, changeCurrentMenuType] = useState("About");

  const changeMenuType = (newMenuType) => {
    changeCurrentMenuType(newMenuType);
  };

  //Home Screen
  return (
    <div className="App">
      <HmBanner />
      <HmMenuBar menuType={currentMenuType} menuChanged={changeMenuType} />
      <HmMenu menuType={currentMenuType} />
    </div>
  );
};

export default HmApp;
