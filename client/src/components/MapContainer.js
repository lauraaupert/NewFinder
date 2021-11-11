import React, { useState, useContext } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Search from "./Search"
import { MarkerContext } from "../utils/MarkerContext"
import AddFile from "./AddFile"

const googleKey = process.env.REACT_APP_APIKEY
function style(props) {
  const styles = props.styles

}
// const styles = require('./GoogleMapStyles.json')



const MapContainer = (props) => {
  const styles = require(`${props.styles}`)
  // const marker = props.markers

  const [ selected, setSelected ] = useState({});

  const onSelect = item => {
        setSelected(item);
      }

  // const marker = useContext(MarkerContext);
  //     console.log(marker.list)

  const mapStyles = {        
    height: "70vh",
    width: "100%",
    opacity: ".9"
  };
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }

  const marker = props.markers;
  
  return (
    <LoadScript
       googleMapsApiKey = {googleKey}>

      <Search />

      <GoogleMap
        mapContainerStyle={mapStyles}

        options={{styles: styles}}

        zoom={2.3}
        center={defaultCenter}>
          
        {marker.map(item => {
                  // {marker.map(item => {

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