
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './Journal.css';

import JournalHeader from "./JournalHeader";

const useStyles = makeStyles({
  root: {
    width: '80%',
    backgroundColor: 'beige',
    margin: '10px auto',
    textAlign: 'left',
  },
});

function JournalPost(props) {
  const classes = useStyles();

  return (
    <Grid >
      <Card className={classes.root} >
        <CardContent>
          <JournalHeader
            className={classes.title}
            name={props.data.author}
            data={props.data.createdAt}
          />
          <p>{props.data.post}</p>
        </CardContent>
        <CardActions>
          <Button  color="primary" size="small" /*onClick={}*/ variant="contained">Edit</Button>
          <Button color="primary" /*onClick={}*/ size="small">Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default JournalPost;
