
// import React from "react";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Popup from './JournalDeletePopup';
// import Modal from 'react-bootstrap/Modal'
import './Journal.css';

import JournalHeader from "./JournalHeader";

const useStyles = makeStyles({
  root: {
    width: '80%',
    backgroundColor: 'white',
    margin: '10px auto',
    textAlign: 'left',
  },
});

export default function Journal(props) {
  const classes = useStyles();
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Grid id={props.data.id} >
      <Card className={classes.root} >
        <CardContent>
          <JournalHeader
            className={classes.title}
            name={props.data.title}
          />
          <JournalHeader
            className={classes.data}
            data={props.data.create_date}
          />
          <p>{props.data.body}</p>
        </CardContent>
        <CardActions>
          <Button variant="primary" size="small" onClick={() => setModalShow(true)}  variant="contained">
            Delete
          </Button>
          <Popup
            show={modalShow}
            onHide={() => setModalShow(false)}
            id={props.data.id}
          />
        </CardActions>
      </Card>
    </Grid>
  );
}
