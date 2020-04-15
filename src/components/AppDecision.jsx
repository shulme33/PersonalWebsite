import React, { Component } from "react";
import AppHome from "./home-page/AppHome.jsx";
import AppTracker from "./calorie-tracker/AppTracker.jsx";
import AppContactMe from "./contact-me/AppContactMe.jsx";

class AppDecision extends Component {
  state = {
    app: "",
  };

  constructor(props) {
    //First Created
    super(props);
    this.state.app = props.application;
  }

  componentWillReceiveProps(nextProps) {
    //Props have changed
    console.log("New Props");
    this.setState({ app: nextProps.application });
  }

  render() {
    switch (this.state.app) {
      case "Home":
        return <AppHome />;
      case "Tracker":
        return <AppTracker />;
      case "ContactMe":
        return <AppContactMe />;
      default:
        throw new Error("No valid app found for app: " + this.state.app);
    }
  }
}

export default AppDecision;
