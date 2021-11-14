import React from 'react';
import { Col } from 'react-bootstrap';
import NewMapModal from '../newMapModal/NewMapModal';


function GetStarted({name}) {

    return(
        <div className="getStarted" style={{display: "flex", alignItems:"center"}}>
            <Col size={3}>
            <h2>Welcome, {name}!</h2>
            <h3>Get Started Here:</h3>
        <NewMapModal />
        </Col>
        </div>
    )
}

export default GetStarted;