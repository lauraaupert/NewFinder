
import React, { useContext, useEffect } from 'react';
import Header from "../Header";
import TabsMap from "../TabsMap";
// import passport from "../../utils/passport"
// import { UserContext } from '../../utils/authenticatedUserContext'
import authenticatedUserContext from '../../utils/authenticatedUserContext'
import GetStarted from '../GetStarted/GetStarted';
import { Col } from 'react-bootstrap';
import { MarkerContext } from '../../utils/MarkerContext';

function MapsPage() {
    // const { id, email, maps } = useContext(UserContext);
// console.log(UserContext)

    const context = useContext(authenticatedUserContext)
    // const mapContext = useContext(MarkerContext)


    
    console.log(context)
    
    const mapsToDisplay = context.maps
    console.log(mapsToDisplay)

    // if (mapContext.mapList.length < mapsToDisplay.length) {
      // mapContext.setMapList(mapsToDisplay)

    // }
    // console.log(mapContext)
    // useEffect(() => {
    //   mapContext.setList(context.markers);
    
  
    // }, [])

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
        hasMaps: context.hasMaps,
        name: context.name
    }
    // let map = authenticatedUser.maps
    console.log(context)
    // const maps = authenticatedUser.maps
    // mapsToDisplay.concat(context.maps)
   

    // console.log(Array.isArray(authenticatedUser.maps[0]))


//     passport.isAuthenticated()
//     .then(res => {
//       console.log(res.data.email)
//         setAuthenticatedUser(res.data)
//       })
//         console.log(authenticatedUser)
// console.log(authenticatedUser)

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
// style={{
//   backgroundSize: "cover",
//   backgroundImage: `url(` + background + `)`,
//   backgroundPositionY: "30%",
//   margin: 0
// }}
> 

{authenticatedUser.hasMaps ?
<div style={{width: "90vw"}}>
  <Col >
    <Header name={authenticatedUser.name} />
    <TabsMap mapsToDisplay={mapsToDisplay}/>
    {/* {mapsToDisplay.map(function(item, index) {
      return(
      <h1>{item.mapStyle}</h1>
      )
    })} */}
    </Col>
  </div>
:
  <GetStarted name={authenticatedUser.name} />
}  
   </div>
    )
}
export default MapsPage;