import React from "react";
//import "../../css/home-page/banner.css";
import "../../css/calorie-tracker/tr-banner.css";
import "../../App.css";

const TrBanner = ({ showContactForm }) => {
  return (
    <div className="tr-banner">
      <div className="tr-banner-area">
        <h1 className="tr-banner-title">Calorie Tracker</h1>
        <button className="tr-add-food-button">Add Food</button>
        <p className="tr-went-shopping-link">I Just Went Shopping</p>
      </div>
    </div>
  );
};

export default TrBanner;
