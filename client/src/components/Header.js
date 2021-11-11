import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import AddModal from './AddModal'

function Header() {

    return(
      <Jumbotron fluid>

        <Container style={{height: "200px", paddingTop: "150px", paddingBottom: "200px"}}>
          <h1 style={{color: "white"}}>Find Each Other</h1>
          <p style={{color: "white"}}>
            Your Circus Family is just a click away    
          </p>

          <AddModal />

        </Container>

      </Jumbotron>
    )
}
export default Header;

