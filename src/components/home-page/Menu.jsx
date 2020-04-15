import React from "react";
import MenuAbout from "./MenuAbout";
import MenuProjects from "./MenuProjects";
import MenuResume from "./MenuResume";
import "../../css/home-page/menu.css";

const Menu = ({ menuType }) => {
  React.useEffect(() => {
    console.log("Menu: " + menuType);
    //this.ListeningStateChangedEvent();
  }, [menuType]);

  function determineMenu() {
    if (menuType === "About") {
      return <MenuAbout />;
    }
    console.log("Switch: " + menuType.toUpperCase());
    switch (menuType.toUpperCase()) {
      case "ABOUT":
        return <MenuAbout />;
        break;
      case "PROJECTS":
        return <MenuProjects />;
        break;
      case "RESUME":
        return <MenuResume />;
        break;
    }
  }

  //const returnComponent = () => {
  return <React.Fragment>{determineMenu()}</React.Fragment>;
  //};

  //returnComponent();
};

export default Menu;
