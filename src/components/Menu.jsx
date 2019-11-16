import React from "../../node_modules/react";
import MenuAbout from "./MenuAbout";
import MenuProjects from "./MenuProjects";
import MenuResume from "./MenuResume";
import "../css/menu.css";

const Menu = ({ menuType }) => {
  React.useEffect(() => {
    console.log("Menu: " + menuType);
    this.ListeningStateChangedEvent();
  }, [menuType]);

  function determineMenu() {
    if (menuType === "About") {
      return <MenuAbout />;
    }
    switch (menuType.toUpperCase()) {
      case "About":
        return <MenuAbout />;
        break;
      case "Projects":
        return <MenuProjects />;
        break;
      case "Resume":
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
