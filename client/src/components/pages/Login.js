import React from "react";
import SignIn from "../SignIn";


 function LoginPage({setIsAuthenticatedUser}) {
    return (
        <div className="login">
          {/* <h1 className="title__app">GameDex</h1> */}
          <div >
            
            </div>
            <div className="loginPage__image">
            <SignIn setIsAuthenticatedUser={setIsAuthenticatedUser} />           </div>
          </div>
        
    )
}

export default LoginPage;