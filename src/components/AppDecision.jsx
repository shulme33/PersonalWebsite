import React, { Component } from "react";
import HmApp from "./home-page/HmApp.jsx";
import TrApp from "./calorie-tracker/TrApp.jsx";
import CtApp from "./contact-me/CtApp.jsx";

class AppDecision extends Component {
  //Props: application
  state = {
    app: "",
  };

  constructor(props) {
    //First Created
    super(props);
    this.state.app = props.application;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.application !== this.props.application) {
      this.setState({ app: this.props.application });
    }
  }

  componentDidMount() {
    //Props have changed
    this.setState({ app: this.props.application });
  }

  render() {
    switch (this.state.app) {
      case "Home":
        return <HmApp />;
      case "Tracker":
        return <TrApp />;
      case "ContactMe":
        return <CtApp />;
      default:
        throw new Error("No valid app found for app: " + this.state.app);
    }
  }
}

export default AppDecision;
