import React, { useState, useContext } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Search from "./Search"
import AddFile from "./AddFile"
import authenticatedUserContext from '../utils/authenticatedUserContext'
import { MarkerContext } from '../utils/MarkerContext';
import CommentDisplay from './CommentDisplay';
import AddModal from './AddModal';
import Col from 'react-bootstrap/Col';


const googleKey = process.env.REACT_APP_APIKEY



const MapContainer = (props) => {
  const styles = require(`${props.styles}`)
  // const marker = props.markers
  const context = useContext(authenticatedUserContext)
  const mapContext = useContext(MarkerContext)
  // const [contMark, setContMark] = useState(mapContext.list})
  const markers = context.markers
  let mapMarkers = []
  console.log(markers)
  
  



  // if (mapContext.list.length > markers.length) {
    if (mapContext.list !== undefined) {

      mapMarkers = mapContext.list.filter(marker => {
    return (marker.index === props.index)
  })

  } else {
    mapMarkers = markers.filter(marker => {
      return (marker.index === props.index)
    })
  }

  const [ allMarkers, setAllMarkers ] = useState(mapMarkers)

  console.log(allMarkers)


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
                   <Col lg={4}>
            <AddModal index={props.index} markers={markers} />
          </Col>


      <Search index={props.index} markers={mapMarkers} setAllMarkers={setAllMarkers}/>
      {/* <motion.div
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
}}>  */}
{/* <AddModal index={props.index} markers={markers} setAllMarkers={setAllMarkers}/> */}
 {/* </motion.div> */}
      <GoogleMap
        mapContainerStyle={mapStyles}

        options={{styles: styles}}

        zoom={2.3}
        center={defaultCenter}>

<CommentDisplay index={props.index} />

          
        {allMarkers.map(item => { 
          {/* {mapContext.map(item => {  */}

                  // {/* // {marker.map(item => {

            return (

                <Marker 
                  key={item.name + item.day} 
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
                  <p>{selected.comment}</p>
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