// export const App = ()=>{
//   return <h1> This is a react page</h1>;
// };


// <h1> This is a react Page </h1>  : In pure react we can also write it(h1) as React.createElement('h1',null, This is a react page)

import React from "react";
export const App = ()=>{
  return React.createElement('h1',null,"This is the react page");
};