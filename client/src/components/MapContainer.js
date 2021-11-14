import React, { useState, useContext } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Search from "./Search"
import { MarkerContext } from "../utils/MarkerContext"
import AddFile from "./AddFile"
import authenticatedUserContext from '../utils/authenticatedUserContext'
import { motion } from "framer-motion"
import AddModal from './AddModal';


const googleKey = process.env.REACT_APP_APIKEY
function style(props) {
  const styles = props.styles

}
// const styles = require('./GoogleMapStyles.json')



const MapContainer = (props) => {
  console.log(props.index)
  const styles = require(`${props.styles}`)
  // const marker = props.markers
  const context = useContext(authenticatedUserContext)
  // const marker = context.maps[0].mapName
  console.log(context)
  let mapMarkers = []
   mapMarkers = context.markers.filter(marker => {
    return (marker.index === props.index)
  })
console.log(mapMarkers)

  const [ selected, setSelected ] = useState({});

  const onSelect = item => {
        setSelected(item);
      }

  // const marker = useContext(MarkerContext);
  //     console.log(marker.list)

  const mapStyles = {        
    height: "70vh",
    width: "100%",
    opacity: ".9",
    // zIndex: "-1"
  };
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }

  // const marker = props.markers;
  
  return (
    <LoadScript
       googleMapsApiKey = {googleKey}>

      <Search />
     
      <motion.div
style={{backgroundColor: "red", alignItems: "center", justifyContent: "center",
width: "60px", zIndex: "1", height: "60px",display: "flex", borderRadius: "50%"}}
initial={{opacity: 0}}
animate={{opacity: 1}}
transition={{duration: 2}}
drag
dragSnapToCenter={true}

dragConstraints={{
    top: 0,
    left: 0, 
    right: 500,
    bottom: 500,
}}> 
<AddModal index={props.index}/>
 </motion.div>
      <GoogleMap
        mapContainerStyle={mapStyles}

        options={{styles: styles}}

        zoom={2.3}
        center={defaultCenter}>


          
        {mapMarkers.map(item => { 
                  // {/* // {marker.map(item => {

            return (

                <Marker 
                  key={item.name} 
                  position={item.location} 
                  onClick={() => onSelect(item)}
                />
            )
        })
        }
         
        {selected.location && 
            (
              <InfoWindow
                position={selected.location}
                clickable={true}
                onCloseClick={() => setSelected({})}
              >
                <div>
                  <p style={{fontSize: "20px"}}>{selected.name}</p>
                  <p>{selected.show}</p>
                  <p>{selected.email}</p>

                  <AddFile />

                </div>
              </InfoWindow>
            )
        }

      </GoogleMap>

    </LoadScript>

  )
}

export default MapContainer;