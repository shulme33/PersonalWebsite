import React, { Component } from "react";
import Tr_Banner from "./Tr_Banner.jsx";
import Tr_Menu from "./Tr_Menu.jsx";
import Tr_ItemList from "./Tr_ItemList.jsx";
import Tr_ProgressMenu from "./Tr_ProgressMenu.jsx";

class Tr_App extends Component {
  render() {
    return (
      <div className="tr_app">
        <Tr_Banner />
        <Tr_Menu />
        <Tr_ItemList />
        <Tr_ProgressMenu />
      </div>
    );
  }
}

export default Tr_App;
