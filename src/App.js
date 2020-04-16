import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Hm_Footer from "./components/home-page/Hm_Footer.jsx";
import AppDecision from "./components/AppDecision";
import "./App.css";
import "./fonts/Karla.ttf";
import "./fonts/Reliable.otf";

const App = () => {
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

  const [application, changeApplication] = useState("Tracker"); //Home, Tracker, ContactMe

  return (
    <div className="App">
      <NavBar
        contactForm={false}
        contactClicked={() => {
          changeApplication("ContactMe");
        }}
        trackerClicked={() => {
          changeApplication("Tracker");
        }}
        homeClicked={() => {
          changeApplication("Home");
        }}
      />
      <AppDecision application={application} />
      <Hm_Footer />
    </div>
  );
};

export default App;
