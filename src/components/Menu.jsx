import React from "../../node_modules/react";
import MenuAbout from "./MenuAbout";
import "../css/menu.css";

const Menu = params => {
  function determineMenu() {
    console.log(params.menuType);
    if (params.menuType === "About") {
      return <MenuAbout />;
    }
  }

  function foo() {
    return "hi";
  }

  return <React.Fragment>{determineMenu()}</React.Fragment>;
};

export default Menu;
