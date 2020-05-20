import React, { Component } from "react";
import TrBanner from "./TrBanner.jsx";
import TrMenu from "./TrMenu.jsx";
import TrItemList from "./TrItemList.jsx";
import TrProgressMenu from "./TrProgressMenu.jsx";
import axios from "axios";
import { simpleQuery } from "../database/simple-query.js";
import { getFoodItems } from "../database/tr-queries.js";

class TrApp extends Component {
  state = {
    runDate: null,
    foodItems: null,
  };

  componentDidMount() {
    //console.log(getFoodItems(axios, ""));
    simpleQuery(axios, getFoodItems(axios, ""));
  }

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
