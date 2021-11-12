import { createContext } from 'react';

const authenticatedUserContext = createContext({
    _id: "",
    // username: "",
    email: "",
    maps: []
})

export default authenticatedUserContext