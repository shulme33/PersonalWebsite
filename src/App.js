import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
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

  const [application, changeApplication] = useState("Home"); //Home, Tracker (Not Used), ContactMe, MyWork

  return (
    <div className="App">
      <NavBar
        contactForm={false}
        contactClicked={() => {
          changeApplication("ContactMe");
        }}
        myWorkClicked={() => {
          changeApplication("MyWork");
        }}
        homeClicked={() => {
          changeApplication("Home");
        }}
      />
      <AppDecision application={application} />
      <Footer />
    </div>
  );
};

export default App;
