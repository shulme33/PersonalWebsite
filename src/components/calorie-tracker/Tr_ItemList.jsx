import React, { Component } from "react";
import Tr_ItemListMeal from "./Tr_ItemListMeal.jsx";
import "../../css/calorie-tracker/tr-item-list.css";

class Tr_ItemList extends Component {
  state = {};
  render() {
    return (
      <div className="tr-item-list">
        <Tr_ItemListMeal />
        <Tr_ItemListMeal />
        <Tr_ItemListMeal />
      </div>
    );
  }
}

export default Tr_ItemList;
