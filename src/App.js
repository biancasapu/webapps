import React, { Component } from "react";
import Header from "./components/header";

require("dotenv").config();
class App extends Component {
  render() {
    return <Header />;
  }
}

export default App;
