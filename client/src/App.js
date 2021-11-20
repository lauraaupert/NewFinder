import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import passport from "./utils/passport";
import authenticatedUserContext from "./utils/authenticatedUserContext";
import "./App.css";
import MapsPage from "./components/pages/Maps";
import LoginPage from "./components/pages/Login";
import { MarkerProvider } from "./utils/MarkerContext";



function App() {
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState({})

  console.log(authenticatedUser)
      
      const getData = () => {passport.isAuthenticated().then((res) => {
        console.log(res)
        console.log("The response from checking authenticating is:", res.data.name);
        if (res.data.success) {
          console.log("SUCCESS!");
          setIsAuthenticatedUser(true);
          // console.log(res.data)
          passport.getUser().then((user) => {
            // console.log(user.data)
          let person = ({
            _id: user.data._id,
            email: user.data.email,
            maps: user.data.maps,
            hasMaps: user.data.hasMaps,
            name: user.data.name,
            password: user.data.password,
            markers: user.data.markers
            
          })
          // console.log(person)
          setAuthenticatedUser(person)
        })
        } else {
          console.log("FAILURE");
          setIsAuthenticatedUser(false);
          setAuthenticatedUser({});
        }
  
        console.log("The current user logged in is", authenticatedUser);
      });
    }


  useEffect(() => {
    passport.isAuthenticated().then((res) => {
      console.log(res)
      console.log("The response from checking authenticating is:", res.data.name);
      if (res.data.success) {
        console.log("SUCCESS!");
        setIsAuthenticatedUser(true);
        // console.log(res.data)
        passport.getUser().then((user) => {
          // console.log(user.data)
        let person = ({
          _id: user.data._id,
          email: user.data.email,
          maps: user.data.maps,
          hasMaps: user.data.hasMaps,
          name: user.data.name,
          password: user.data.password,
          markers: user.data.markers,
          availableStyles: user.data.availableStyles,
          comment: user.data.comment
        })
        setAuthenticatedUser(person)

      })
      } else {
        console.log("FAILURE");
        setIsAuthenticatedUser(false);
        setAuthenticatedUser({});
      }

      console.log("The current user logged in is", authenticatedUser);
    });
  }, [isAuthenticatedUser]);

  window.onload = console.log("I reloaded")


  console.log(authenticatedUser)
  return (
    <Router>

      <authenticatedUserContext.Provider value={authenticatedUser}>

        <MarkerProvider>

      <Switch>
          {isAuthenticatedUser ? (
            <>
              <Route exact path={["/", "/login"]}>
                <Redirect to="/MapsPage" />
              </Route>

              <Route exact path={["/MapsPage"]}>
                <MapsPage setIsAuthenticatedUser={setIsAuthenticatedUser} setAuthenticatedUser={setAuthenticatedUser}/>
              </Route>
            </>
          ) : (
            <>
              <Route exact path="/">
                <LoginPage setIsAuthenticatedUser={setIsAuthenticatedUser} />
              </Route>
            </>
          )}
        </Switch>
        </MarkerProvider>
    </authenticatedUserContext.Provider>
    </Router>
  );
}


export default App;


{/* <div className="App" 
style={{
  backgroundSize: "cover",
  backgroundImage: `url(` + background + `)`,
  backgroundPositionY: "30%",
  margin: 0
}}> 
<MarkerProvider>
  <Header />
  <TabsMap />
  {/* <MapContainer /> */}
// </MarkerProvider>
// </div> */}
// 
