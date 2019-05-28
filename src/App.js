import React, { Component } from "react";
import "./App.css";
//import Header from "./components/header";
import Notice from "./components/notice";
require("dotenv").config();

class App extends Component {
  render() {
    return (
      <div>
        <Notice />
      </div>
    );
  }
}

export default App;
