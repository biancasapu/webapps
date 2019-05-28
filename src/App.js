import React, { Component } from "react";
import "./App.css";
//import Header from "./components/header";
import LostFoundPage from "./components/lostFoundPage";
require("dotenv").config();

class App extends Component {
  render() {
    return (
      <div>
        <LostFoundPage />
      </div>
    );
  }
}

export default App;
