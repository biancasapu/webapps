import React, { Component } from "react";
import Header from "./components/header";
//import GoogleApiWrapper from "./components/mapsAPI";
require("dotenv").config();
class App extends Component {
  render() {
    return <Header />;
  }
}

export default App;
