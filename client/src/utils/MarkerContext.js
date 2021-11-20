
import React, { createContext, useEffect, useState } from "react";
import passport from './passport'

export const MarkerContext = createContext();

// This context provider is passed to any component requiring the context
export const MarkerProvider = ({ children }) => {
  const [list, setList] = useState( [] );
  const [mapList, setMapList] = useState( [] )
  console.log(list, mapList, "context state")

// useEffect(() => {
//   passport.getUser().then(user => {
//     console.log(user)
//     if (user.data.maps) {
//       user.data.maps.forEach(item => {
//         mapList.push(item)
//       })
//       // setMapList(user.maps)
//     }
//   })
// })



  return (
    <MarkerContext.Provider
      value={{
        list,
        setList,
        mapList, 
        setMapList
      }}
    >
      {children}
    </MarkerContext.Provider>
  );
};






// import React from "react";
// // default context object with properties corresponding to Provider values

// const MarkerContext = React.createContext({
//     const [list, setList] = useState("William");
    
//         friend:[
//         {    
//   name: "",
//   email: "",
//   show: "",
//   location: ""}
            
//         ]

// });

// export default MarkerContext;