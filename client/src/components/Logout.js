import React, { useState } from 'react';
import passport from "../utils/passport"
import Button from 'react-bootstrap/Button'

function LogOut({setIsAuthenticatedUser}) { 

    function onClick(e) {
        console.log("logging out!")
        passport.Logout()
        window.location.assign('../')
    }

    return(
        <Button onClick={onClick} variant="secondary" style={{position: "absolute", right: "10px", top:"10px"}}>
            Logout
        </Button>
        )

    }

export default LogOut;