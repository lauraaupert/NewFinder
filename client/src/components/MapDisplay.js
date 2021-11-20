import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const googleKey = process.env.REACT_APP_APIKEY



const MapDisplay = (props) => {
  const styles = require(`${props.styles}`)
  const mapStyles = {        
    height: "40vh",
    width: "100%",
    opacity: ".9",
    // zIndex: "-1"
  };
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }

  
  return (
    <LoadScript
       googleMapsApiKey = {googleKey}>

     
      <GoogleMap
        mapContainerStyle={mapStyles}

        options={{styles: styles}}

        zoom={2.3}
        center={defaultCenter}>


          

      </GoogleMap>

    </LoadScript>

  )
}

export default MapDisplay;