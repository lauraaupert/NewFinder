import React, { useState, useEffect } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import api from '../utils/api'

function AddForm({ handleChange }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [show, setShow] = useState("");
    const [address, setAddress] = useState("");
    const [currentLatitude, setCurrentLatitude] = useState("");
    const [currentLongitude, setCurrentLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    
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

        if (name === "" || email === "" || show === "" || address === "") {
            alert("Please fill out your name, email, show, and location");
        } else {
            if (latitude, longitude) {
              api.saveFriend(name, email, show, latitude, longitude);
            } else {
              const location = address;

              api.geocode(location)
              .then(res => {
                const apiLatitude = res.data.data[0].latitude
                const apiLongitude = res.data.data[0].longitude
                console.log("Friend Data: ", name, email, show, apiLatitude, apiLongitude);
        
                api.saveFriend(name, email, show, apiLatitude, apiLongitude)
              })
              .catch(err => console.log(err));
            }
        }
    };
  
      
    return (
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={name}/>
        </Form.Group>

        <br/>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </Form.Group>

        <br/>

        <Form.Group controlId="show">
          <Form.Label>Which show were you on?</Form.Label>
          <Form.Control type="email" placeholder="Show" onChange={(e) => setShow(e.target.value)} value={show}/>
        </Form.Group>

        <br/>

        <Form.Group controlId="address">
          <Form.Label>Where are you located?</Form.Label>
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
