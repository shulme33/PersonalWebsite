import React from "react";
import HmMenuAbout from "./HmMenuAbout";
import HmMenuProjects from "./HmMenuProjects";
import HmMenuResume from "./HmMenuResume";
import "../../css/home-page/menu.css";

const Hm_Menu = ({ menuType }) => {
  function determineMenu() {
    if (menuType === "About") {
      return <HmMenuAbout />;
    }
    switch (menuType.toUpperCase()) {
      case "ABOUT":
        return <HmMenuAbout />;
      case "PROJECTS":
        return <HmMenuProjects />;
      case "RESUME":
        return <HmMenuResume />;
      default:
        throw new Error("Unknown Menu Type: " + menuType);
    }
  }

  return <React.Fragment>{determineMenu()}</React.Fragment>;
};

export default Hm_Menu;
