import React, { Component } from "react";
import NavBar from "./components/NarBar";
import SignIn from "./components/SignIn";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SignIn />
      </div>
    );
  }
}

export default App;
