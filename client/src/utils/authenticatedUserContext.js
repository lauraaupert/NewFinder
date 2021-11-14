// import React, { createContext, useState } from "react";

// export const UserContext = createContext();

// // This context provider is passed to any component requiring the context
// export const UserProvider = ({ children }) => {
//   const [list, setList] = useState( [] );
//   console.log(list)
// //   const [location, setLocation] = useState("Mars");

//   return (
//     <UserContext.Provider
//       value={{
//         list,
//         setList
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };




import { createContext } from 'react';

const authenticatedUserContext = createContext({
    user: {}
    // _id: "",
    // // username: "",
    // email: "",
    // maps: [],
    // hasMaps: false
})

export default authenticatedUserContext;