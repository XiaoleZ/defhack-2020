// This is a journal session.
import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
// import logo from './logo.svg';
import "./custom.css";
import JournalPost from "./JournalPost";


export default function Journal() {
  // const classes = useStyles();
  const [post] = useState([
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
      post: "old old NEW post",
    },
  ]);

  return (
    
    <div className="Journal">
      <div>
      <Typography component="h1" variant="h5">
          Let's write a journal!
      </Typography>
      <TextField
          variant="outlined"
          margin="normal"
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
      <Button  color="primary" variant="contained"
      >Create</Button>

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
