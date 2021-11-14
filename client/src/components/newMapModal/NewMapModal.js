import React, { useState, useContext } from "react"
import AddForm from '../Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import authenticatedUserContext from '../../utils/authenticatedUserContext'
import passport from '../../utils/passport'

import './index.css'
import NewMapTabs from "./NewMapTabs"


function AddNewMap(props) {
  let context = useContext(authenticatedUserContext)
  const [ user, setUser ] = useState({
    _id: context._id,
    email: context.email,
    name: context.name,
    maps: context.maps,
    hasMaps: context.hasMaps,
    password: context.password

  })
  
  console.log(context)
// context.maps.filter((data) => {
//            console.log(data.mapStyle.includes("yellow"))
//   })

  const [ newMap, setNewMap ] = useState({
    // id: context._id,
      mapStyle: "",
      mapName: "",
      mapDescription: ""
  })
  const mapsies = [context.maps]
  // console.log(mapsies[0][0])

  console.log(newMap)
  function onSubmit() {
    passport.saveMap(context._id, newMap)
    // .then(console.log(passport.getUser()))
    // context.map = newMap;
    console.log(context)
    onClick()
  }

  function onClick() {
    props.onHide()
    console.log(user)
    passport.LogIn(context.email, context.password).then(res =>{
      console.log(res.data)
      if (res.data.hasMaps) {
        setUser({
          _id: res.data._id,
          email: res.data.email,
          name: res.data.name,
          maps: res.data.maps,
          hasMaps: res.data.hasMaps,
          password: res.data.password
        })
        console.log(user)
        // let newContext = useContext(authenticatedUserContext))
        // window.location.assign('../MapsPage')
      }
      // context = res.data
      // console.log(context)
      // if (context.maps.length) {
      //   console.log(context.maps)
      
    })
    .then(window.location.reload())
  }

  return (
    <authenticatedUserContext.Provider value={user}>

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
        <NewMapTabs setNewMap={setNewMap} newMap={newMap}/>
      </Modal.Body>

      <Modal.Footer>
        {/* <Button onClick={onClick}>Close</Button> */}
        <Button onClick={onSubmit}>Close</Button>

      </Modal.Footer>

    </Modal>
    </authenticatedUserContext.Provider>

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