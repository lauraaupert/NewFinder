import React, { useEffect, useState, useContext } from "react";
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


function App() {
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState({})


  // useContext(authenticatedUserContext) = authenticatedUser;
  console.log(authenticatedUser)
  //NEED TO SET CONTEXT TO LOGGED USER

  useEffect(() => {
    passport.isAuthenticated().then((res) => {
      console.log(res)
      console.log("The response from checking authenticating is:", res.data.name);
      if (res.data.success) {
        console.log("SUCCESS!");
        setIsAuthenticatedUser(true);
        console.log(res.data)
        passport.getUser().then((user) => {
          console.log(user.data)
        let person = ({
          _id: user.data._id,
          email: user.data.email,
          maps: user.data.maps,
          hasMaps: user.data.hasMaps,
          name: user.data.name,
          password: user.data.password,
          markers: user.data.markers

          // _id: res.data._id,
          // email: res.data.email,
          // maps: res.data.maps,
          // hasMaps: res.data.hasMaps,
          // name: res.data.name
        })
        console.log(person)
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

  const addUserData = (id, email, maps) => {
    console.log(id, email, maps)
    setAuthenticatedUser({
      _id: id,
      email: email,
      maps: maps,
    });
    console.log(authenticatedUser)
  };
  console.log(authenticatedUser)
  return (
    <Router>
      <authenticatedUserContext.Provider value={authenticatedUser}>
      <Switch>
          {isAuthenticatedUser ? (
            <>
              <Route exact path={["/", "/login"]}>
                <Redirect to="/MapsPage" />
              </Route>

              <Route exact path={["/MapsPage"]}>
                <MapsPage setIsAuthenticatedUser={setIsAuthenticatedUser} />
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
