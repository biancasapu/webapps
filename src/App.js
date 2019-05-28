import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Notice from "./components/notice";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Notice />
      </div>
    );
  }
}

export default App;
