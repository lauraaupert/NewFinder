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
import MapContainer from "./components/MapContainer";
import { MarkerProvider } from "./utils/MarkerContext"
import Header from "./components/Header";
import background from "./BIGTOP.jpeg"
import TabsMap from "./components/TabsMap";
import MapsPage from "./components/pages/Maps";
import LoginPage from "./components/pages/Login";


function App() {
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState({
    _id: "",
    email: "",
    maps: [],
  });

  useEffect(() => {
    passport.isAuthenticated().then((res) => {
      console.log("The response from checking authenticating is:", res.data);
      if (res.data.success) {
        console.log("SUCCESS!");
        setIsAuthenticatedUser(true);
        console.log(res.data)
        addUserData(res.data._id, res.data.email, res.data.maps);
      } else {
        console.log("FAILURE");
        setIsAuthenticatedUser(false);
        setAuthenticatedUser({});
      }

      console.log("The current user logged in is", authenticatedUser);
    });
  }, [isAuthenticatedUser]);

  const addUserData = (id, email, maps) => {
    setAuthenticatedUser({
      _id: id,
      email: email,
      maps: maps,
    });
  };
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
                <MapsPage />
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
