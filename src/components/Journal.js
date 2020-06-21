// This is a journal session.
import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
// import logo from './logo.svg';
import "./custom.css";
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
        {/* Let's write a journal! <br />
        <label for="title">Title:</label> <br />
        <input type="text" id="title" name="title" placeholder="Title" /> <br />
        <label for="journalContent">Journal Content: </label> <br /> */}
        {/* <textarea
          id="journalContent"
          name="journalContent"
          rows="5"
          cols="100"
          placeholder="What're your thoughts? Just write it donw here!"
        /> */}
        <div>
        <Typography component="h1" variant="h5">
            Let's write a journal!
        </Typography>
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="title"
            label="Title"
            type="journal"
            id="journal"
            style = {{width: 600}}
          />
        <br />
        <TextField
            variant="outlined"
            margin="normal"
            multiline
            rows={8}
            rowsMax={8}
            name="content"
            label="content"
            type="journal"
            id="journalContent"
            style = {{width: 600}}
          />
        <br />
        <Button type="button" color="primary" variant="contained">Create</Button>

        </div>
        <div className="myJournal">
          <Typography component="h1" variant="h5" m={20}>
              My Journals
          </Typography>
          <div className="post-container">
              {post && post.map(post => <JournalPost key={post.id} data={post} />)}
          </div> 

        </div>
      </div>
    );
  }
}

export default Journal;
