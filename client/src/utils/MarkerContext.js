
import React, { createContext, useState } from "react";

export const MarkerContext = createContext();

// This context provider is passed to any component requiring the context
export const MarkerProvider = ({ children }) => {
  const [list, setList] = useState( [] );
  console.log(list)
//   const [location, setLocation] = useState("Mars");

  return (
    <MarkerContext.Provider
      value={{
        list,
        setList,
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