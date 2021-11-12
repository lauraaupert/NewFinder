import React, { useState, useContext } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import MapContainer from './MapContainer';
import { MarkerContext } from "../utils/MarkerContext"
import blue from '../components/maps/images/Blue.png'
import yellowSeas from '../components/maps/images/YellowSeas.png'
import white from '../components/maps/images/White.png'
import orange from '../components/maps/images/Orange.png'
import { Button } from 'react-bootstrap';


function NewMapTabs() {

    const mapThumbnails = [white, blue, orange, yellowSeas]
    const mapStyles = ["White", "Blue", "Orange", "Yellow Seas"]

    const nextTab = (event) => {
        event.preventDefault();
        
    }

    return(
    <Tabs defaultActiveKey="theme" id="uncontrolled-tab-example" className="mb-3">
    <Tab eventKey="theme" title="Theme">
    <Tab.Container id="left-tabs-example" defaultActiveKey={mapStyles[0]}>
        <Row>

            <Col sm={3}>
            <Nav variant="pills" className="flex-column">
            {mapStyles.map(function(item, index) {
                    return(

                        <Nav.Item>
                        <Nav.Link eventKey={item}>{item}</Nav.Link>
                        </Nav.Item>
                         )
                        })}
                        </Nav>
                        <Button className="saveButton" variant="primary">Save</Button>
            </Col>
                               

            
            <Col sm={9}>
            <Tab.Content>
            {mapThumbnails.map(function(item, index) {
                    return(

                <Tab.Pane eventKey={mapStyles[index]}>
                    <img className="mapPic" src={item} />
                </Tab.Pane>
                                  )
                                })}
                
                </Tab.Content>
                </Col>
        </Row>
        </Tab.Container>
    </Tab>
    <Tab eventKey="info" title="Info">
    </Tab>
    <Tab eventKey="totem" title="Totem">
    </Tab>
  </Tabs>
  )
}

export default NewMapTabs;