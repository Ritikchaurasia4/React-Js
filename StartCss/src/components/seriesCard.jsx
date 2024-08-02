// export const SeriesCard=({curElem})=>{
  

//     const {id , img_url , name , rating , description , cast , genre , watch_url} = curElem;    // Destructuring 
//       return(
          
        
//              <li>  
             
               
//                <div>
//                  <img src={img_url} alt="movie title name"  width="40%" height="20%"/>
//                </div>
//                   <h2>Name: {name}</h2>
//                  <h3>Rating: {rating}</h3>
//                  <p> Summary :{description} </p>
         
//                  <p>Genre:{genre}</p>
//                  <p> Caste:{cast} </p>
//                  <a href={watch_url} target="_blank" > <button>watch Now</button></a>
             
//             </li>
           
//       );
//   };
  
//   export default SeriesCard;

// ============= or , =================================================================================

// export const SeriesCard=({curElem})=>{
  

//   const {id , img_url , name , rating , description , cast , genre , watch_url} = curElem;    // Destructuring 
//     return(
        
      
//            <li className="card">  
//              <div>
//                <img src={img_url} alt="movie title name"  width="40%" height="20%"/>
//              </div>
//              <div className="card-content">
//                 <h2>Name: {name}</h2>
//                <h3 style={{margin:"1.2rem 0"}}>Rating: {rating}</h3>
//                <p style={{margin:"1.2rem 0"}}> Summary: {description} </p>
       
//                <p style={{margin:"1.2rem 0"}}>Genre:{genre}</p>
//                <p style={{margin:"1.2rem 0"}}> Caste:{cast} </p>
//                <a href={watch_url} target="_blank" > <button>watch Now</button></a>
//               </div>
//           </li>
         
//     );
// };

// export default SeriesCard;

// ============== The above code can also be written as ======= , For the Same output We are  not applying inline css we are applying the External css AND ( we can also apply the inline css ) .

// export const SeriesCard=({curElem})=>{
  

//   const {id , img_url , name , rating , description , cast , genre , watch_url} = curElem;    // Destructuring 
//     return(
        
      
//            <li className="card">  
//              <div>
//                <img src={img_url} alt="movie title name"  width="40%" height="20%"/>
//              </div>
//              <div className="card-content">
//                 <h2>Name: {name}</h2>
//                <h3>Rating: {rating}</h3>
//                <p> Summary: {description} </p>
       
//                <p>Genre:{genre}</p>
//                <p> Caste:{cast} </p>
//                <a href={watch_url} target="_blank" > 
//                  <button 
//                    style={{                   // Here we apply inline css , In React inline css apply as an object form.
//                       padding:"1.2rem 2.4rem",
//                       border:"none" , 
//                       fontSize:"1.6rem" , 
//                       backgroundColor:"var(--btn-hover-bg-color)" , 
//                       color:"var(--bg-color)"
//                       }}>
//                         watch Now
//                   </button>
//                 </a>
//               </div>
//           </li>
         
//     );
// };

// export default SeriesCard;


// ======================== the just above code can also be written as ===================================================

// export const SeriesCard=({curElem})=>{
  

//   const {id , img_url , name , rating , description , cast , genre , watch_url} = curElem;    // Destructuring 

//   const btn_style = {      // Css in object form , because in react CSS apply in object form
//     padding:"1.2rem 2.4rem",
//     border:"none" , 
//     fontSize:"1.6rem" , 
//     backgroundColor:"var(--btn-hover-bg-color)" , 
//     color:"var(--bg-color)"
//     }


//     return(
        
      
//            <li className="card">  
//              <div>
//                <img src={img_url} alt="movie title name"  width="40%" height="20%"/>
//              </div>
//              <div className="card-content">
//                 <h2>Name: {name}</h2>

//                {/* <h3 className="rr">Rating: <span className="super_hit">
//                <h3 className="rr">Rating: <span className="average">{rating} </span></h3> */}


//                 {/* conditional styling show just given below*/}

//                {/* <h3>
//                   Rating: <span className={rating>=8.5 ? "super_hit" : "average"}>{rating} </span> 
//                 </h3> */}

//                 <h3>
//                           {/* Here we can also use two classes with each other also. show in just below code  */}

//                           {/* Rating: <span className={`rating timepass ${rating>=8.5 ? "super_hit" : "average"}`}>{rating} </span>   */}

//                   Rating: <span className={`rating ${rating>=8.5 ? "super_hit" : "average"}`}>{rating} </span>  

                  
//                 </h3>



//                <p> Summary: {description} </p>
       
//                <p>Genre:{genre}</p>
//                <p> Caste:{cast} </p>
//                <a href={watch_url} target="_blank" > 
//                  <button 
//                    style={btn_style}  // here CSS has call 
//                   >
//                         watch Now
//                   </button>
//                 </a>
//               </div>
//           </li>
         
//     );
// };

// export default SeriesCard;


// ================================ the just above code can also be written as ================================================


export const SeriesCard=({curElem})=>{
  

  const {id , img_url , name , rating , description , cast , genre , watch_url} = curElem;    // Destructuring 

  const btn_style = {      // Css in object form , because in react CSS apply in object form
    padding:"1.2rem 2.4rem",
    border:"none" , 
    fontSize:"1.6rem" , 
    backgroundColor:`${rating>=8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color:"var(--btn-color)" ,
    fontWeight:"bold",
    cursor:"pointer",
    }
  const ratingClass = rating>=8.5 ? "super_hit" : "average";

    return(
        
      
           <li className="card">  
             <div>
               <img src={img_url} alt="movie title name"  width="40%" height="20%"/>
             </div>
             <div className="card-content">
                <h2>Name: {name}</h2>

               {/* <h3 className="rr">Rating: <span className="super_hit">
               <h3 className="rr">Rating: <span className="average">{rating} </span></h3> */}


                {/* conditional styling show just given below*/}

               {/* <h3>
                  Rating: <span className={rating>=8.5 ? "super_hit" : "average"}>{rating} </span> 
                </h3> */}

                <h3>
                          {/* Here we can also use two classes with each other also. show in just below code  */}

                          {/* Rating: <span className={`rating timepass ${rating>=8.5 ? "super_hit" : "average"}`}>{rating} </span>   */}

                  Rating: <span className={`rating ${ratingClass}`}>{rating} </span>  

                  
                </h3>



               <p> Summary: {description} </p>
       
               <p>Genre:{genre}</p>
               <p> Caste:{cast} </p>
               <a href={watch_url} target="_blank" > 
                 <button 
                   style={btn_style}  // here CSS has call 
                  >
                        watch Now
                  </button>
                </a>
              </div>
          </li>
         
    );
};

// export default SeriesCard;