// This is a journal session.
import React, { Component } from "react";
// import logo from './logo.svg';
// import "./Journal.css";
import JournalPost from "./JournalPost";

class Journal extends Component {
  //hardcode
  state = {
    post: [
      {
        id: 1,
        author: "Xiaole",
        createdAt: "3 min ago",
        post: "old post",
      },
      {
        id: 2,
        author: "Xiaole",
        createdAt: "1 hour ago",
        post: "old old post",
      },
    ],
  };
  //

  render() {
    //hardcode
    const { post } = this.state;

    return (
      
      <div className="Journal">
        Let's write a journal! <br />
        <label for="title">Title:</label> <br />
        <input type="text" id="title" name="title" placeholder="Title" /> <br />
        <label for="journalContent">Journal Content: </label> <br />
        <textarea
          id="journalContent"
          name="journalContent"
          rows="5"
          cols="100"
          placeholder="What're your thoughts? Just write it donw here!"
        />
        <br />
        <button type="button">Save</button>

        <div className="post-container">
            {post && post.map(post => <JournalPost key={post.id} data={post} />)}
        </div> 
      </div>
    );
  }
}

export default Journal;
