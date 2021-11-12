import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import passport from "../utils/passport"
import Button from 'react-bootstrap/Button'
import api from '../utils/api'

function SignIn({setIsAuthenticatedUser}) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function login(e) {
    e.preventDefault();
    console.log("Username and password are", email, password)

    passport.LogIn(email, password).then(res => {
      if (res.status === 200) {
      setIsAuthenticatedUser(true)
      }
    })
  }
  async function signup(e) {
    e.preventDefault();

    passport.signUp(email, password).then(response =>{
      if (response.status === 200) {
        setIsAuthenticatedUser(true)
      }
    })
  }

    // const signUp = (event) => {
    //     event.preventDefault();
    //     api.saveUser(email, password)
    //     .catch(err => console.log(err));
    // }
    // const logIn = (event) => {
    //     event.preventDefault();
    //     api.getUser(email)    
    //     .then(res => {
    //         console.log(res.data)
    //     })
    //         .catch(error => {
    //             console.log('Error getting data: ' + error);
    //             })
          
    // }

    return(
    <Form style={{position:'absolute', top: "10px"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)} value={email}

          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
                  onChange={(e) => setPassword(e.target.value)} value={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={login}>
          Submit
        </Button>
        <Button variant="primary" type="submit" onClick={signup}>
          Sign Up
        </Button>

      </Form>
      )
}

export default SignIn;

