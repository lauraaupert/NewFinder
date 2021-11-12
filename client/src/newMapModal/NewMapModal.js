import React from "react"
import AddForm from '../components/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import './index.css'
import NewMapTabs from "./NewMapTabs"


function AddNewMap(props) {

  function onClick() {
    props.onHide()
    window.location.reload();
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a New Map
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h4>Set up a new map</h4>
        <NewMapTabs />
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onClick}>Close</Button>
      </Modal.Footer>

    </Modal>
    );
  };
  
function NewMapModal() {
  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <>
      <Button className="plus" variant="primary" block onClick={() => setModalShow(true)}>
        +
      </Button>
  
      <AddNewMap
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
    );
  };
  
  export default NewMapModal;