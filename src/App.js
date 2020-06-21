import React, { Component } from 'react';
import NavBar from './components/NarBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Survey from './components/Survey';
import JournalPost from './components/JournalPost';

// import logo from './logo.svg';
import "./App.css";

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
      <div className="App">
        <NavBar />
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        <Survey/>
        <div className="post-container">
          {post && post.map(post => <JournalPost key={post.id} data={post} />)}
        </div>
    );
  }
}

export default App;
