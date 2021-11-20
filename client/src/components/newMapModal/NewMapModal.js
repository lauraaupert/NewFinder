import React, { useState, useContext } from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import authenticatedUserContext from '../../utils/authenticatedUserContext'
import passport from '../../utils/passport'

import './index.css'
import NewMapTabs from "./NewMapTabs"
import { MarkerContext } from "../../utils/MarkerContext"
import { useEffect } from "react"


function AddNewMap(props) {
  console.log(props.allmaps)
  let context = useContext(authenticatedUserContext)
  const [ user, setUser ] = useState(
    {
    _id: context._id,
    email: context.email,
    name: context.name,
    maps: context.maps,
    hasMaps: context.hasMaps,
    password: context.password,
    markers: context.markers,
    availableStyles: context.availableStyles,
    comment: context.comment
    })
  const mapContext = useContext(MarkerContext)
  console.log(mapContext)
  console.log(context.email)
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

  
// context.maps.filter((data) => {
//            console.log(data.mapStyle.includes("yellow"))
//   })

  const [ newMap, setNewMap ] = useState({
    // id: context._id,
      mapStyle: "",
      mapName: "",
      mapDescription: ""
  })
  const [mapToDelete, setMapToDelete] = useState([])
  console.log(newMap)
  console.log(mapToDelete)

  // let styleToDelete = context.availableStyles.map(item => 0)
  console.log(context.availableStyles)
  // console.log(styleToDelete)  
  // styleToDelete = context.availableStyles.filter(style => {
  //   return (style[0] === newMap.mapStyle)
  // })
  // console.log(Array.isArray(styleToDelete[0]))




   function onSubmit() {
    if (newMap.mapStyles === "" || newMap.mapName === "" || newMap.mapDescription === "") {
      alert("Please fill out all the fields");
    } else {
    // if (context.hasMaps) {
      console.log("So I save!")
      localStorage.clear()
      let savedMap = [newMap];

      // mapContext.setMapList(mapContext.mapList.concat(savedMap))
      // console.log(props.allmaps)
      // props.allmaps.push(newMap)
      console.log(context.email, context.password)
     passport.saveMap(context._id, newMap, mapToDelete)
     .then(passport.LogIn(context.email, context.password))

     .then(window.location.reload())
    // .then(getInfo())
    //  console.log("reloaaaaad")
     
    // .then(window.location.reload(),      
    props.onHide()
    // )
     
  
    
     
    // .then(passport.isAuthenticated().then((res) => {
    //   console.log(res)
    // }))


    // .then(res => console.log(res),
    //   passport.LogIn(context.email, context.password))
    // .then(passport.getUser().then(res => {
    //   console.log(res.data)
    // //   // passport.LogIn(context.email, context.password).then(res =>{
    //       setUser({
    //         _id: res.data._id,
    //         email: res.data.email,
    //         name: res.data.name,
    //         maps: res.data.maps,
    //         hasMaps: res.data.hasMaps,
    //         password: res.data.password,
    //         markers: res.data.markers,
    //         availableStyles: res.data.availableStyles
    //       })

    // }))
    
      // } else {
      //   let savedMap = [newMap];
      //   passport.saveMap(context._id, newMap)
      //   // .then(
      //     .then(window.location.reload())
     
          // if (mapContext.mapList > 0) {
          //   mapContext.setMapList(mapContext.mapList.concat(savedMap))
          // } else {
          //   mapContext.setMapList(savedMap)

          // }

        

    // .then(passport.LogIn(context.email, context.password))
    // .then(passport.getUser().then(res => {
    //       setUser({
    //         _id: res.data._id,
    //         email: res.data.email,
    //         name: res.data.name,
    //         maps: res.data.maps,
    //         hasMaps: res.data.hasMaps,
    //         password: res.data.password,
    //         markers: res.data.markers,
    //         availableStyles: res.data.availableStyles

    //       })
      
          // mapContext.setMapList(user.maps)
          

      
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
    

    
  // })
  // .then(
    // onClick()
    


   }
  }
  

  useEffect(() => {
  passport.LogIn(context.email, context.password)
.then(passport.getUser().then(res => {
  console.log(res.data)
//   // passport.LogIn(context.email, context.password).then(res =>{
      setUser({
        _id: res.data._id,
        email: res.data.email,
        name: res.data.name,
        maps: res.data.maps,
        hasMaps: res.data.hasMaps,
        password: res.data.password,
        markers: res.data.markers,
        availableStyles: res.data.availableStyles,
        comment: res.data.comment

      })
    }))
    }, [])

  function onClick(e) {
     
    props.onHide()
    console.log(user)
    // window.location.reload()
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
        <NewMapTabs setNewMap={setNewMap} newMap={newMap} setMapToDelete={setMapToDelete}/>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onSubmit}>Close</Button>

      </Modal.Footer>

    </Modal>
    // </authenticatedUserContext.Provider>

    );
  };
  
function NewMapModal(props) {
  console.log(props.allmaps)
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
        allmaps={props.allmaps}
      />
    </>

    );
  };
  
  export default NewMapModal;