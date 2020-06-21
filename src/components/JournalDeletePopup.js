import React from "react";
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
import axios from "axios"

function deleteJournal(id) {
  axios.delete('/entry', {
    data: {entryId: id}
  })
  .then(function(response){
    console.log(response)
    //localStorage
  })
}

function refreshPage() {
  window.location.reload(false);
};

export default function Popup(props)  {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Warning
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to delete this journal post?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button color="primary" variant onClick={props.onHide}>Cancel</Button>
        <Button variant="secondary" onClick={(e) => { deleteJournal(props.id); e.preventDefault(); props.onHide(); refreshPage()}}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}