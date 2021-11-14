import React, { useState, useContext } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import MapContainer from './MapContainer';
import { MarkerContext } from "../utils/MarkerContext"
import authenticatedUserContext from '../utils/authenticatedUserContext'



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
    console.log(context)
    // const [authenticatedUser, setAuthenticatedUser] = useState({
    //     id: context._id,
    //     email: context.email,
    //     maps: context.maps
    // })
    // setAuthenticatedUser(context)
    const authenticatedUser = {
        id: context._id,
        email: context.email,
        maps: context.maps,
        name: context.name,

    }

    console.log(context.maps)



    return(
    <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
      {context.maps.map(function(item, index) {
        console.log(item.mapStyle)
        return(
          <Tab eventKey={item.mapStyle} title={item.mapStyle}>
          <MapContainer
          styles={item.mapStyle}
        //   markers={marker.list}
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