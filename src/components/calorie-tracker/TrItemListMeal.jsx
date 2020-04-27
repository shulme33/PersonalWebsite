import React, { Component } from "react";
import axios from "axios";
import { simpleQuery } from "../database/simple-query.js";
import "../../css/calorie-tracker/tr-item-list-meal.css";

class TrItemListMeal extends Component {
  //Props: mealName
  state = {
    mealName: "",
  };

  componentDidMount() {
    this.setState({ mealName: this.props.mealName });
    console.log(this.props.mealName);
  }

  handleSubmit = (e) => {
    simpleQuery(e, axios, "select * from users");
  };

  render() {
    return (
      <div className="tr-item-list-meal">
        <button onClick={this.handleSubmit} id="submit">
          Submit!
        </button>
      </div>
    );
  }
}

export default TrItemListMeal;
