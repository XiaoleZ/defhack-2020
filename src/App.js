import React, { Component } from 'react';
import NavBar from './components/NarBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Progress from './components/Progress';
import Survey from './components/Survey';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        <Survey/>
      </div>
    );
  }
}

export default App;
