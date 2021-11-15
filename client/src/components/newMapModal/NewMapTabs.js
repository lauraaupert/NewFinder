import React from 'react';
import Form from 'react-bootstrap/Form'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import blue from '../maps/images/Blue.png'
import yellowSeas from '../maps/images/YellowSeas.png'
import white from '../maps/images/White.png'
import orange from '../maps/images/Orange.png'
import { Button } from 'react-bootstrap';


function NewMapTabs({newMap, setNewMap}) {

    const mapThumbnails = [white, blue, orange, yellowSeas]
    const mapChoices = ["White", "Blue", "Orange", "Yellow Seas"]
    const mapStyles = ['./maps/whiteMap.json', './maps/blueMap.json', './maps/secondMapStyle.json', './maps/yellowSeasMap.json']



    return(
    <Tabs defaultActiveKey="theme" id="uncontrolled-tab-example" className="mb-3">
    <Tab eventKey="theme" title="Theme">
    <Tab.Container id="left-tabs-example" defaultActiveKey={mapChoices[0]}>
        <Row>

            <Col sm={3}>
            <Nav variant="pills" className="flex-column">
            {mapChoices.map(function(item, index) {
                    return(

                        <Nav.Item key={index}>
                        <Nav.Link  eventKey={item} value={mapStyles[index]} onClick={(e) => setNewMap({...newMap, mapStyle: mapStyles[index]})}>{item}</Nav.Link>
                        </Nav.Item>
                         )
                        })}
                        </Nav>
                        <Button className="saveButton" variant="primary" >Save</Button>
            </Col>
                               

            
            <Col sm={9}>
            <Tab.Content>
            {mapThumbnails.map(function(item, index) {
                    return(

                <Tab.Pane key={index} eventKey={mapChoices[index]}>
                    <img className="mapPic" src={item} alt="Map Picture" />
                </Tab.Pane>
                                  )
                                })}
                
                </Tab.Content>
                </Col>
        </Row>
        </Tab.Container>
    </Tab>
    <Tab eventKey="info" title="Info">
    <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Enter name" onChange={(e) => setNewMap({...newMap, mapName: e.target.value})} value={newMap.mapName}/>
        </Form.Group>

        <br/>

        <Form.Group controlId="email">
          <Form.Label>Description</Form.Label>
          <Form.Control type="email" placeholder="Description" onChange={(e) => setNewMap({...newMap, mapDescription: e.target.value})} value={newMap.mapDescription}/>
        </Form.Group>
</Form>
    </Tab>
    <Tab eventKey="totem" title="Totem">
    </Tab>
  </Tabs>
  )
}

export default NewMapTabs;