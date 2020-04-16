import React from "react";
import Hm_MenuAbout from "./Hm_MenuAbout";
import Hm_MenuProjects from "./Hm_MenuProjects";
import Hm_MenuResume from "./Hm_MenuResume";
import "../../css/home-page/menu.css";

const Hm_Menu = ({ menuType }) => {
  React.useEffect(() => {
    console.log("Menu: " + menuType);
    //this.ListeningStateChangedEvent();
  }, [menuType]);

  function determineMenu() {
    if (menuType === "About") {
      return <Hm_MenuAbout />;
    }
    console.log("Switch: " + menuType.toUpperCase());
    switch (menuType.toUpperCase()) {
      case "ABOUT":
        return <Hm_MenuAbout />;
        break;
      case "PROJECTS":
        return <Hm_MenuProjects />;
        break;
      case "RESUME":
        return <Hm_MenuResume />;
        break;
    }
  }

  //const returnComponent = () => {
  return <React.Fragment>{determineMenu()}</React.Fragment>;
  //};

  //returnComponent();
};

export default Hm_Menu;
