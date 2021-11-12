
import React, { useState } from 'react';
import MapContainer from "../MapContainer";
import { MarkerProvider } from "../../utils/MarkerContext"
import Header from "../Header";
import background from '../../BIGTOP.jpeg'
import TabsMap from "../TabsMap";
import passport from "../../utils/passport"

function MapsPage() {
    const [authenticatedUser, setAuthenticatedUser] = useState({})

    passport.isAuthenticated()
    .then(res => {
      console.log(res.data.email)
        setAuthenticatedUser(res.data.email)
      })
        console.log(authenticatedUser)


    return(
        <div className="App" 
style={{
  backgroundSize: "cover",
  backgroundImage: `url(` + background + `)`,
  backgroundPositionY: "30%",
  margin: 0
}}> 
{/* <MarkerProvider> */}
  <Header />
  <TabsMap />
   {/* <MapContainer /> */}
   </div>

    )
}
export default MapsPage;