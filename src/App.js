import React, { Component } from "react";
import NavBar from "./components/NarBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Survey from "./components/Survey";
import Journal from "./components/Journal";

// import logo from './logo.svg';

import { BrowserRouter as Router , Route} from "react-router-dom";
import axios from "axios";
import './App.css';


class App extends Component {
  signIn(){
    axios.post('/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      if(response.data === 'success'){
        window.location.assign('http://localhost:3000/')
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
        <NavBar/>
        <div className="container">
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/survey" component={Survey} />
          <Route exact path="/journal" component={Journal} />         
        </div>
        </div>

      </Router>
    );
  }
}

export default App;
