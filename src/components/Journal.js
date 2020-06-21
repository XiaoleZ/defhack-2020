// This is a journal session.
import React, { Component } from "react";
// import logo from './logo.svg';
// import "./Journal.css";

class Journal extends Component {
  render() {
    return (
      <div class="Journal">
        Let's write a journal! <br />
        <label for="title">Title:</label> <br />
        <input type="text" id="title" name="title" placeholder="Title" /> <br />
        <label for="journalContent">Journal Content: </label> <br />
        <textarea
          id="journalContent"
          name="journalContent"
          rows="5"
          cols="100"
          placeholder="What are your thoughts? Write them down! :)"
        />
        <br />
        <button type="button">Save</button>
      </div>
    );
  }
}

export default Journal;
