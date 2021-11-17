import React, { useState, useContext, useEffect } from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import authenticatedUserContext from '../../utils/authenticatedUserContext'
import passport from '../../utils/passport'

import './index.css'
import NewMapTabs from "./NewMapTabs"
import { MarkerContext } from "../../utils/MarkerContext"


function AddNewMap(props) {
  console.log(props)
  let context = useContext(authenticatedUserContext)
  const [ user, setUser ] = useState({
    _id: context._id,
    email: context.email,
    name: context.name,
    maps: context.maps,
    hasMaps: context.hasMaps,
    password: context.password,
    markers: context.markers
  })
  const mapContext = useContext(MarkerContext)
  console.log(mapContext)
  console.log(user)

  // useEffect(() => {
  //   passport.LogIn(context.email, context.password).then(res =>{
  //     console.log(res.data)
  //     if (res.data.hasMaps) {
  //       // mapContext.setList(res.data.markers)
  //       // mapContext.setMapList(res.data.maps)

  //       setUser({
  //         _id: res.data._id,
  //         email: res.data.email,
  //         name: res.data.name,
  //         maps: res.data.maps,
  //         hasMaps: res.data.hasMaps,
  //         password: res.data.password,
  //         markers: res.data.markers
  //       })
  //       // console.log(mapContext)
        
  //     }
      
  //   })
  //   // .then(setAuthenticatedUser(user))
  //   // window.location.reload()
  // }, [])

  
  console.log(context)
  console.log(user)
// context.maps.filter((data) => {
//            console.log(data.mapStyle.includes("yellow"))
//   })

  const [ newMap, setNewMap ] = useState({
    // id: context._id,
      mapStyle: "",
      mapName: "",
      mapDescription: ""
  })

  console.log(newMap)

  function onSubmit() {
    if (context.maps.length > 0) {
      console.log("So I save!")
    passport.saveMap(context._id, newMap)
    .then(passport.LogIn(context.email, context.password))
    .then(passport.getUser().then(res => {
    //   // passport.LogIn(context.email, context.password).then(res =>{
        console.log(res.data)
          setUser({
            _id: res.data._id,
            email: res.data.email,
            name: res.data.name,
            maps: res.data.maps,
            hasMaps: res.data.hasMaps,
            password: res.data.password,
            markers: res.data.markers
          })
          let savedMap = [newMap];

          mapContext.setMapList(mapContext.mapList.concat(savedMap))
    }))


    console.log(mapContext)
    // onClick()
    props.onHide()
    console.log(user)
      } else {
      passport.saveMap(context._id, newMap)
    .then(passport.LogIn(context.email, context.password))
    .then(passport.getUser().then(res => {
    //   // passport.LogIn(context.email, context.password).then(res =>{
        console.log(res.data)
        if (res.data.hasMaps) {
          setUser({
            _id: res.data._id,
            email: res.data.email,
            name: res.data.name,
            maps: res.data.maps,
            hasMaps: res.data.hasMaps,
            password: res.data.password,
            markers: res.data.markers
          })
          console.log(user.maps)
          mapContext.setMapList(user.maps)
          
      
          // let newContext = useContext(authenticatedUserContext))
          // window.location.assign('../MapsPage')
        // }
        // context = res.data
        // console.log(context)
        // if (context.maps.length) {
        //   console.log(context.maps)
        
      // })
  
    // .then(console.log(passport.getUser()))
    // context.map = newMap;
  //   console.log(context)
    

    }
  }).then(onClick())
    )


   }
  }

  function onClick(e) {
     
    props.onHide()
    console.log(user)
    window.location.reload()
  }

  return (
    // <authenticatedUserContext.Provider value={user}>

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
    // </authenticatedUserContext.Provider>

    );
  };
  
function NewMapModal() {
  const [modalShow, setModalShow] = React.useState(false);
  // console.log(setAuthenticatedUser)
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