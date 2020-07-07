import React, { Component } from "react";
import TrItemListMeal from "./TrItemListMeal.jsx";
import "../../css/calorie-tracker/tr-item-list.css";

class TrItemList extends Component {
  state = {};
  render() {
    return (
      <div className="tr-item-list">
        <TrItemListMeal mealName="Breakfast" />
        <TrItemListMeal mealName="Lunch" />
        <TrItemListMeal mealName="Dinner" />
        <TrItemListMeal mealName="Snacks" />
      </div>
    );
  }
}

export default TrItemList;
