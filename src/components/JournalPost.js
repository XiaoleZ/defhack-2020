
import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import JournalHeader from "./JournalHeader";


export default function JournalPost(props) {

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