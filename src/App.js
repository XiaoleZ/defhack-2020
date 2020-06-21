import React, { Component } from 'react';
import NavBar from './components/NarBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Survey from './components/Survey';
import JournalPost from './components/JournalPost';
// import logo from './logo.svg';

import { BrowserRouter as Router , Route} from "react-router-dom";
import './App.css';

class App extends Component {
  //hardcode
  state = {
    post: [{
      id:1,
      author: "Xiaole",
      createdAt: "3 min ago",
      post:"old post"},
      {
        id:2,
        author: "Xiaole",
        createdAt: "1 hour ago",
        post:"old old post"},]
  };
  //

  render() {
    //hardcode
    const { post } = this.state;
    return (
      <Router>
        <div className="App">
        <NavBar/>
        <div className="container">
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/survey" component={Survey} />
          <Route exact path="/journel">
            {/* <div className="post-container">
            {post && post.map(post => <JournalPost key={post.id} data={post} />)}
          </div> */}            
          </Route>

        </div>
        </div>

      </Router>
    );
  }
}

export default App;
