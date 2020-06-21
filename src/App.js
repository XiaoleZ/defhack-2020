import React, { Component } from "react";
import NavBar from "./components/NarBar";
import SignIn from "./components/SignIn";
import Journal from "./components/Journal";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Journal />
      </div>
    );
  }
}

export default App;
