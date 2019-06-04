import React, { Component } from "react";
import Header from "./components/header";
require("dotenv").config();
// import GoogleApiWrapper from "./components/mapsAPI";
class App extends Component {
  render() {
    return <Header />;
  }
}

export default App;
