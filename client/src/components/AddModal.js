import React from "react"
import AddForm from './Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function AddYourself(props) {
  // console.log(props)
  function onClick() {
    props.onHide()
    
    // window.location.reload();
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
          Add a Place!
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h4>Enter Info:</h4>
        <AddForm index={props.index} 
        markers={props.markers} 
        setAllMarkers={props.setAllMarkers} allMarkers={props.allMarkers}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onClick}>Close</Button>
      </Modal.Footer>

    </Modal>
    );
  };
  
function AddModal(props) {
  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <>
      <Button variant="danger" style={{borderRadius: "50%"}} size="lg" block onClick={() => setModalShow(true)}>
        +
      </Button>
      <p>Add a Place</p>
  
      <AddYourself
        index={props.index}
        markers={props.markers}
        setAllMarkers={props.setAllMarkers}
        allMarkers={props.allMarkers}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
    );
  };
  
  export default AddModal;