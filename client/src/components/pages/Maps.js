
import React, { useContext, useState } from 'react';
import Header from "../Header";
import TabsMap from "../TabsMap";
import authenticatedUserContext from '../../utils/authenticatedUserContext'
import GetStarted from '../GetStarted/GetStarted';
import { Col } from 'react-bootstrap';
import { MarkerContext } from '../../utils/MarkerContext';
import { useEffect } from 'react';
import passport from '../../utils/passport'

function MapsPage(props) {
    const context = useContext(authenticatedUserContext)
    const mapContext = useContext(MarkerContext)
console.log(context)

  const [lastMap, setLastMap] = useState("")

async function getInfo() {
  console.log(context.email, context.password)
  // let info =
   setTimeout(function() {
  console.log("this is the first message")

  passport.LogIn(context.email, context.password)
console.log("reloaaaaad")


passport.getUser().then(res => {
 console.log("is this good data?", res.data)
 let person = ({
  _id: res.data._id,
  email: res.data.email,
  maps: res.data.maps,
  hasMaps: res.data.hasMaps,
  name: res.data.name,
  password: res.data.password,
  markers: res.data.markers,
  availableStyles: res.data.availableStyles,
  comment: res.data.comment

})
console.log(person)
props.setAuthenticatedUser(person)
if (localStorage.getItem('tabSelection') === undefined) {
  setLastMap(res.data.maps[res.data.maps.length - 1].mapStyle)
} else {
  setLastMap(localStorage.getItem('tabSelection'))
}
console.log(res.data.maps[res.data.maps.length - 1].mapStyle)
})

}, 2000)
// return info
}

    const authenticatedUser = {
        id: context._id,
        email: context.email,
        maps: context.maps,
        hasMaps: context.hasMaps,
        name: context.name,
        password: context.password,
        markers: context.markers,
        availableStyles: context.availableStyles,
        comment: context.comment

    }

    useEffect(() => {
      getInfo()

      // passport.isAuthenticated().then((res) => {
      //   console.log(res)
      //   console.log("The response from checking authenticating is:", res.data.name);
      //   if (res.data.success) {

      //     console.log("SUCCESS!");
      //     // setIsAuthenticatedUser(true);
      //     // console.log(res.data)
      //     passport.getUser().then((user) => {
      //       // console.log(user.data)
      //     let person = ({
      //       _id: user.data._id,
      //       email: user.data.email,
      //       maps: user.data.maps,
      //       hasMaps: user.data.hasMaps,
      //       name: user.data.name,
      //       password: user.data.password,
      //       markers: user.data.markers,
      //       availableStyles: user.data.availableStyles
      //     })
      //     // setAuthenticatedUser(person)
  
      //   })
      //   } else {
      //     console.log("FAILURE");
      //     // setIsAuthenticatedUser(false);
      //     // setAuthenticatedUser({});
      //   }
  
      //   console.log("The current user logged in is", authenticatedUser);
      // });
    }, []);
    console.log(authenticatedUser)
  
    console.log(context)
    mapContext.setMapList(context.maps)

    return(
        <div 
        className="App" 
        style={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          // verticalAlign: "center",
          height: "100vh"
        }}
> 

{/* {context.hasMaps  ? */}
{/* // {authenticatedUser.maps.length ? */}
{/* // mapContext.setMapList(authenticatedUser.maps)  */}

<div style={{width: "90vw"}}>
  <Col >
    <Header name={context.name} />
    <TabsMap lastMap={lastMap}/>
    {/* {mapsToDisplay.map(function(item, index) {
      return(
      <h1>{item.mapStyle}</h1>
      )
    })} */}
    </Col>
   </div>
{/* :
  <GetStarted name={context.name} />
}   */}
   </div> 
    )
}
export default MapsPage;