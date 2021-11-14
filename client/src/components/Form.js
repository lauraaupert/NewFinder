import React, { useState, useEffect, useContext } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import api from '../utils/api'
import authenticatedUserContext from '../utils/authenticatedUserContext'
import passport from '../utils/passport'

function AddForm(props) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [address, setAddress] = useState("");
    const [currentLatitude, setCurrentLatitude] = useState("");
    const [currentLongitude, setCurrentLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const context = useContext(authenticatedUserContext)
    const id = context._id
    const index = props.index
    console.log(index)
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
          console.log(position.coords);
          setCurrentLatitude(position.coords.latitude);
          setCurrentLongitude(position.coords.longitude);
        })
      }, 
    []);

    function onAddress(e) {
        e.preventDefault();
        setLatitude(currentLatitude);
        setLongitude(currentLongitude);
        setAddress(currentLatitude, currentLongitude);
    };

    async function AddYourself(e) {
        e.preventDefault();

        if (name === "" || comment === "" || address === "") {
            alert("Please fill out your name, email, show, and location");
        } else {
            if (latitude, longitude) {
              let location = {lat: Number(latitude), lng: Number(longitude)}
              let marker = {index, name, comment, location}
              passport.saveDestination(id, marker);
            } else {
              const location = address;

              api.geocode(location)
              .then(res => {

                const apiLatitude = res.data.data[0].latitude
                const apiLongitude = res.data.data[0].longitude
                let location = {lat: Number(apiLatitude), lng: Number(apiLongitude)}

                console.log("Destination Data: ", index, name, comment, apiLatitude, apiLongitude);
                let marker = {index, name, comment, location}
                
                passport.saveDestination(id, marker);
  
              })
              .catch(err => console.log(err));
            }
        }
    };
  
      
    return (
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Destination Name" onChange={(e) => setName(e.target.value)} value={name}/>
        </Form.Group>

        <br/>

        <Form.Group controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control type="email" placeholder="Comment" onChange={(e) => setComment(e.target.value)} value={comment}/>
        </Form.Group>

        <br/>

        <Form.Group controlId="address">
          <Form.Label>Where is it located?</Form.Label>
          <Form.Control type="address" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address}/>
          <Button variant="success" onClick={onAddress}>Use Current Location</Button> 
        </Form.Group>

        <br/>

        <Button variant="primary" type="submit" onClick={AddYourself}>
          Submit
        </Button>

      </Form>
    )
};

export default AddForm;
