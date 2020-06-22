import React from "react";
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme';

export default function MentalHealthPopup(props)  {
  let mentalHealthResources;
  switch (props.riskGroup) {
    case "LOW":
      mentalHealthResources = <React.Fragment>
        <p>Volunteer resources: (888)-888-8888</p>
        <p>Volunteer mental health peer group: www.mentalwellnesspeergroup.space</p>
      </React.Fragment>;
      break;
    case "MEDIUM":
      mentalHealthResources = <React.Fragment>
        <p>Professional resources: (180)-111-1111</p>
        <p>Professional mental health peer group: www.professionalCare.space</p>
        <p>Suicide Hotline: 1-800-273-8255</p>
      </React.Fragment>;
      break;
    case "HIGH":
      mentalHealthResources = <React.Fragment>
        <p>24/7 Suicide Prevention Professional resources: (180)-111-1111</p>
        <p>Urgent care mental health emergency site: www.mentalER.space</p>
        <p>Suicide Hotline: 1-800-273-8255</p>
      </React.Fragment>;
      break;
    default:
      mentalHealthResources = <React.Fragment>
        <p>24/7 Suicide Prevention Professional resources: (180)-111-1111</p>
        <p>Urgent care mental health emergency site: www.mentalER.space</p>
        <p>Suicide Hotline: 1-800-273-8255</p>
      </React.Fragment>;
      break;
  }


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
          We've noticed you may be in a bad mental state.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p color="primary.dark">
          While journaling and self reflection is important, we want you to know that there are professional services here that can help you.
        </p>
        <div>
          {mentalHealthResources}
        </div>
      </Modal.Body>
      <Modal.Footer>
      <ThemeProvider theme={theme}>
        <Button color="primary" variant="contained" size="small" onClick={props.onHide}>Okay</Button>
      </ThemeProvider>
      </Modal.Footer>
    </Modal>
    </div>
  );
}
