
// export const App = ()=>{
//   return(
//     <div>
//      <NetfelixSeries/>
//      <NetfelixSeries/>
//      <NetfelixSeries/>
//      </div>
//   );
  
// };

// export const NetfelixSeries=()=>{
//   return(
//   <div>
//     <img src="Stranger.jpg" alt="Stranger" width="30%" height="30%"/>
//     <h3>Strangers Things</h3>
//     <h3>Rating:8.5</h3>
//     <p>This is one of the best Series on Netfelix</p>
//   </div>)
// }

// ---------------------------------------------------------------

// we can also write the above code as given below :

// ---------------------------------------------------------------

// export const App = ()=>{
//   return([<NetfelixSeries key="1"/> , <NetfelixSeries key="2"/>]
//   );
  
// };

// export const NetfelixSeries=()=>{
//   return(
//   <div>
//     <img src="Stranger.jpg" alt="Stranger" width="30%" height="30%"/>
//     <h3>Strangers Things</h3>
//     <h3>Rating:8.5</h3>
//     <p>This is one of the best Series on Netfelix</p>
//   </div>)
// }


// ---------------------------------------------------------------

// we can also write the above code as given below : Using Fragment

// ---------------------------------------------------------------

// import React from "react";
// export const App = ()=>{
//   return(
//     <React.Fragment>
//      <NetfelixSeries/>
//      <NetfelixSeries/>
//      <NetfelixSeries/>
//     </React.Fragment>
//   );
  
// };

//  const NetfelixSeries=()=>{
//   return(
//   <div>
//     <img src="Stranger.jpg" alt="Stranger" width="30%" height="30%"/>
//     <h3>Strangers Things</h3>
//     <h3>Rating:8.5</h3>
//     <p>This is one of the best Series on Netfelix</p>
//   </div>)
// }


// ---------------------------------------------------------------

// we can also write the above code as given below : Using Fragment

// ---------------------------------------------------------------


// import {Fragment} from "react";
// export const App = ()=>{
//   return(
//     <Fragment>
//      <NetfelixSeries/>
//      <NetfelixSeries/>
//      <NetfelixSeries/>
//     </Fragment>
//   );
  
// };

//  const NetfelixSeries=()=>{
//   return(
//   <div>
//     <img src="Stranger.jpg" alt="Stranger" width="30%" height="30%"/>
//     <h3>Strangers Things</h3>
//     <h3>Rating:8.5</h3>
//     <p>This is one of the best Series on Netfelix</p>
//   </div>)
// }


// ---------------------------------------------------------------

// we can also write the above code as given below :

// ---------------------------------------------------------------


import React from "react";
export const App = ()=>{
  
  return(
    <>
     <NetfelixSeries/>
     <NetfelixSeries/>
     <NetfelixSeries/>
   </>
  );
  
};

 const NetfelixSeries=()=>{
  const name = "Stranger Things";
  const rating = "8.5";
  const summary = "This is one of the best Series on Netfelix";

  let age = 16;

  const returnGenre =()=>{
    const genre = "Fantasy";
    return genre;
  };

  if(age < 18){

    return(
      <div>
        <div>
          <img src="Stranger.jpg" alt="Stranger" width="30%" height="30%"/>
        </div>
           
          <h3>Name: {name}</h3>  {/* here we can pass the variables */}
    
          <h3>Rating:{5+3.5}</h3>   {/* here we can pass the expressions also */}
    
    
          <p>Summary:{summary}</p>   {/* here we can pass the variables */}
    
    
          <p>Genre:{returnGenre()}</p>  {/* here we can pass the functionCalls also */}
    
          <button>Not available</button>
    
      </div>
    );
  }

  return(
    <div>
      <div>
        <img src="Stranger.jpg" alt="Stranger" width="30%" height="30%"/>
      </div>
         
        <h3>Name: {name}</h3>  {/* here we can pass the variables */}
  
        <h3>Rating:{5+3.5}</h3>   {/* here we can pass the expressions also */}
  
  
        <p>Summary:{summary}</p>   {/* here we can pass the variables */}
  
  
        <p>Genre:{returngenre()}</p>  {/* here we can pass the functionCalls also */}
  
        <button>Watch Now</button>
  
    </div>
  );
}