import React, { useContext, useState, useEffect } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import MapContainer from './MapContainer';
import authenticatedUserContext from '../utils/authenticatedUserContext'
import NewMapModal from './newMapModal/NewMapModal';
import { Card } from 'react-bootstrap';
import { MarkerContext } from '../utils/MarkerContext';



function TabsMap() {

    // const marker = useContext(MarkerContext);
    // let kooza = [];
    // let totem = [];
    // let allegria = [];
    // console.log(marker.list)
    // marker.list.forEach((friend) => {
    //     console.log(friend)
    //     if (friend.show === "Kooza") {
    //         kooza.push(friend)
    //     }
    //     if (friend.show === "Totem") {
    //         totem.push(friend)
    //     }
    //     if (friend.show === "Allegria") {
    //         allegria.push(friend)
    //     }
    // })
    const context = useContext(authenticatedUserContext)
    const mapContext = useContext(MarkerContext)
    // mapContext.setMapList(context.maps)
    // console.log(mapContext.mapList)
    console.log(context)

    useEffect(() => {
      if (context.maps.length > mapContext.mapList.length ||
        mapContext.mapList === undefined
        ) {
        mapContext.setMapList(context.maps)
      }
      if (context.markers.length > mapContext.list.length) {
        mapContext.setList(context.markers)
      }
    console.log(context.maps.length)
    console.log(mapContext.mapList.length)
    }, [])
    console.log(mapContext.mapList)


    // const [authenticatedUser, setAuthenticatedUser] = useState({
    //     id: context._id,
    //     email: context.email,
    //     maps: context.maps
    // })
    // setAuthenticatedUser(context)
    // const [authenticatedUser, setAuthenticatedUser] = useState({
    //   _id: context._id,
    //   email: context.email,
    //   name: context.name,
    //   maps: context.maps,
    //   hasMaps: context.hasMaps,
    //   password: context.password,
    //   markers: context.markers

    // })

    // console.log(authenticatedUser)
    // mapContext.setList(authenticatedUser.markers)
    // mapContext.setMapList(authenticatedUser.maps)
    console.log(mapContext)




    return(
      
    <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="all" title="All">
        <Card>
          <Card.Title>
            My Maps
          </Card.Title>
          {/* <Card.Body> */}
            {/* <Card.Text>
              {authenticatedUser.name} has {authenticatedUser.maps.length} maps
            </Card.Text>
            <Card.Text>
              {authenticatedUser.name} has {mapContext.list.length} saved places
            </Card.Text> */}
          {/* </Card.Body> */}
               <NewMapModal setAuthenticatedUser={authenticatedUserContext} />
        </Card>

    </Tab>
      {/* {context.maps.map(function(item, index) { */}
    {mapContext.mapList.map(function(item, index) {

      // {/* {authenticatedUser.maps.map(function(item, index) { */}

        console.log(item.mapStyle, index)
        return(
          <Tab key={index} eventKey={item.mapStyle} title={item.mapName}>
          <MapContainer
          styles={item.mapStyle}
          index={index}
           />
    </Tab>
        )
      })}
    {/* <Tab eventKey="all" title="All">
      <MapContainer
      styles={'./maps/GoogleMapStyles.json'}
    //   markers={marker.list}
       />
    </Tab>
    <Tab eventKey="kooza" title="Kooza">
        <MapContainer
          styles={'./maps/secondMapStyle.json'}
        //   markers={kooza}
          />
    </Tab>
    <Tab eventKey="totem" title="Totem">
      <MapContainer
            styles={'./maps/whiteMap.json'}
            // markers={totem}
        />
    </Tab> */}
  </Tabs>
  )
}

export default TabsMap;