import React, { Component } from "react";
import axios from "axios";
import { simpleQuery } from "../database/simple-query.js";
import "../../css/calorie-tracker/tr-item-list-meal.css";

class ItemListMeal extends Component {
  state = {};

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

export default ItemListMeal;
