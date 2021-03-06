import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import LogOut from "./Logout"

function Header({name}) {
console.log(name)
    return(
      <Jumbotron fluid>
        <LogOut />
        <Container style={{height: "10vh", paddingTop: "50px", paddingBottom: "80px"}}>

        <h1>Hi, {name}</h1>
          <h1 style={{color: "white"}}>Find Each Other</h1>
          <p style={{color: "white"}}>
            Your Circus Family is just a click away    
          </p>

        </Container>

      </Jumbotron>
    )
}
export default Header;

