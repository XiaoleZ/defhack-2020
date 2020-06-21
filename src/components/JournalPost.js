
import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import JournalHeader from "./JournalHeader";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function JournalPost(props) {
  const classes = useStyles();

  return (
    <Grid >
      <Card className="post">
        <CardContent>
          <JournalHeader
            name={props.data.author}
            data={props.data.createdAt}
          />
          <p>{props.data.post}</p>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary" variant="contained">Edit</Button>
          </CardActions>
      </Card>
    </Grid>
  );
}