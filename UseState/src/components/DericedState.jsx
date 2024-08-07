//  const users = [
//     {name:"Ritik" , age:21},
//     {name:"Rahul" , age:26},
//     {name:"Shubham" , age:15},
//     {name:"Dheeraj" , age:17},
// ];
// export const DerivedState = ()=>{
   
//     return(
//         <div className="main-div">
//             <h1>UserList</h1>
//             <ul>
//                 {users.map((curElem , index) =>{
//                     return(
                        
//                          <li key={index}>
//                             {curElem.name} - {curElem.age} years old
//                          </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// }

// ============================================================================================================

// -------------------- Using hook i.e state -------------------------------------------------------------------

import {useState} from "react";
// const users = [
//     {name:"Ritik" , age:21},
//     {name:"Rahul" , age:26},
//     {name:"Shubham" , age:15},
//     {name:"Dheeraj" , age:17},
// ];
export const DerivedState = ()=>{
    const[users , setUsers] = useState([
        {name:"Ritik" , age:21},
        {name:"Rahul" , age:26},
        {name:"Shubham" , age:15},
        {name:"Dheeraj" , age:17},
    ]);
   
    return(
        <div className="main-div">
            <h1>UserList</h1>
            <ul>
                {users.map((curElem , index) =>{
                    return(
                        
                         <li key={index}>
                            {curElem.name} - {curElem.age} years old
                         </li>
                    );
                })}
            </ul>
        </div>
    );
}