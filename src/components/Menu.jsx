import React from "../../node_modules/react";
import MenuAbout from "./MenuAbout";
import "../css/menu.css";

const Menu = params => {
  function determineMenu() {
    if (params.menuType === "About") {
      return <MenuAbout />;
    }
  }

  return <React.Fragment>{determineMenu()}</React.Fragment>;
};

export default Menu;
