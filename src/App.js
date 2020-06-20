import React, { Component } from 'react';
import NavBar from './components/NarBar';
import SignIn from './components/SignIn';
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
        <Progress total="20" current="1"/>
        <Survey question="Are you habituated to drugs and alcohol?"/>
      </div>
    );
  }
}

export default App;
