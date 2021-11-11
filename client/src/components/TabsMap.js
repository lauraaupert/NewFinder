import React, { useState, useContext } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import MapContainer from './MapContainer';
import { MarkerContext } from "../utils/MarkerContext"


function TabsMap() {

    const marker = useContext(MarkerContext);
    let kooza = [];
    let totem = [];
    let allegria = [];
    console.log(marker.list)
    marker.list.forEach((friend) => {
        console.log(friend)
        if (friend.show === "Kooza") {
            kooza.push(friend)
        }
        if (friend.show === "Totem") {
            totem.push(friend)
        }
        if (friend.show === "Allegria") {
            allegria.push(friend)
        }
    })


    return(
    <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
    <Tab eventKey="all" title="All">
      <MapContainer
      styles={'./GoogleMapStyles.json'}
      markers={marker.list}
       />
    </Tab>
    <Tab eventKey="kooza" title="Kooza">
        <MapContainer
          styles={'./secondMapStyle.json'}
          markers={kooza}
          />
    </Tab>
    <Tab eventKey="totem" title="Totem">
      <MapContainer
            styles={'./whiteMap.json'}
            markers={totem}
        />
    </Tab>
  </Tabs>
  )
}

export default TabsMap;