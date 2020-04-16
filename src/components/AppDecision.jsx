import React, { Component } from "react";
import Hm_App from "./home-page/Hm_App.jsx";
import Hm_Tracker from "./calorie-tracker/Tr_App.jsx";
import Ct_App from "./contact-me/Ct_App.jsx";

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
        return <Hm_App />;
      case "Tracker":
        return <Hm_Tracker />;
      case "ContactMe":
        return <Ct_App />;
      default:
        throw new Error("No valid app found for app: " + this.state.app);
    }
  }
}

export default AppDecision;
