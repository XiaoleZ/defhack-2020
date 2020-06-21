// This is a journal session.
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme';
import Card from '@material-ui/core/Card';
import "./custom.css";
import JournalPost from "./JournalPost";

const useStyles = makeStyles({
  root: {
    width: '80%',
    backgroundColor: '#ebfafc',
    color: '#00494A',
    margin: '10px auto',
    textAlign: 'center',
  },
});

function create(userid, title, body) {
  axios.post('/entry', {
    userId: userid,
    title: title,
    body: body
  })
  .then(function(response){
    console.log(response)
    //localStorage
  })
}

export default function Journal() {
  const classes = useStyles();
  const [userid, setId] = useState("1");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [post, setPost] = useState("");

  useEffect(() => {
    async function getJournal(userid) {
      axios.get('/entries', {
        params: {
          userId: userid
        }
      })
      .then( (response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }
    getJournal(userid)
  }, [setPost]);

  return (

    <div className="Journal">
    <ThemeProvider theme={theme}>
      <Typography component="h1" variant="h5" color="primary.dark">
            Let's write a journal!
      </Typography>
      <Card className={classes.root}>
        <TextField
            variant="outlined"
            margin="normal"
            name="title"
            label="Title"
            type="journal"
            id="journal"
            value={title}
            onChange={ (e) => setTitle(e.target.value)}
            style = {{width: 600}}
            labelColor="primary.light"
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
            value={body}
            onChange={ (e) => setBody(e.target.value)}
            style = {{width: 600}}
          />
        <br />
        <Button  color="primary" variant="contained" onClick={(e) => {create(userid, title, body); e.preventDefault()}} >Create</Button>

      </Card>
      <div className="myJournal">
        <Typography component="h1" variant="h5" m={20}>
          My Journals
        </Typography>
        <div className="post-container">
            {post && post.map(post => <JournalPost key={post.id} data={post} />).reverse()}
        </div>

      </div>
    </ThemeProvider>
    </div>
  );
}
