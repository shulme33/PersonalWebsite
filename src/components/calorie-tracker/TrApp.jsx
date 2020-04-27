import React, { Component } from "react";
import TrBanner from "./TrBanner.jsx";
import TrMenu from "./TrMenu.jsx";
import TrItemList from "./TrItemList.jsx";
import TrProgressMenu from "./TrProgressMenu.jsx";

class TrApp extends Component {
  render() {
    return (
      <div className="tr_app">
        <TrBanner />
        <TrMenu />
        <TrItemList />
        <TrProgressMenu />
      </div>
    );
  }
}

export default TrApp;
