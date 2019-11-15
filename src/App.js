import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Banner from "./components/Banner.jsx";
import MenuBar from "./components/MenuBar";
import Menu from "./components/Menu";
import Footer from "./components/Footer.jsx";
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

  let currentMenuType = "About";

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <MenuBar />
      <Menu menuType={currentMenuType} />
      <Footer />
    </div>
  );
};

export default App;
