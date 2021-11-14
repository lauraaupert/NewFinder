import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import AddModal from './AddModal'
import NewMapModal from "./newMapModal/NewMapModal"
import SignIn from "./SignIn"
import { connect } from "mongoose"

function Header({name}) {
console.log(name)
    return(
      <Jumbotron fluid>

        <Container style={{height: "10vh", paddingTop: "50px", paddingBottom: "80px"}}>

        {/* <NewMapModal /> */}
        <h1>Hi, {name}</h1>
        {/* <SignIn /> */}
          <h1 style={{color: "white"}}>Find Each Other</h1>
          <p style={{color: "white"}}>
            Your Circus Family is just a click away    
          </p>

          {/* <AddModal /> */}

        </Container>

      </Jumbotron>
    )
}
export default Header;

