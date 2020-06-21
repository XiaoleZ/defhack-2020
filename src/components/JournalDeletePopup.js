import React from "react";
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
import Modal from 'react-bootstrap/Modal';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme';
import axios from "axios"

function deleteJournal(id) {
  axios.delete('/entry', {
    data: {entryId: id,}
  })
  .then(function(response){
    console.log(response)
    //localStorage
  })
}

export default function Popup(props)  {
  return (
    <div>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" color="primary.dark">
          Warning
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p color="primary.dark">
          Are you sure you want to delete this journal post?
        </p>
      </Modal.Body>
      <Modal.Footer>
      <ThemeProvider theme={theme}>
        <Button color="secondary" size="small" onClick={props.onHide}>Delete</Button>
        <Button color="primary" variant="contained" size="small" onClick={props.onHide}>Cancel</Button>
      </ThemeProvider>
      </Modal.Footer>
    </Modal>
    </div>
  );
}
