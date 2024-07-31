// import seriesData from "../api/seriesData.json";
// export const SeriesCard=(props)=>{
//     console.log(props);

//     const {curElem} = props;    // Destructuring 
//       return(
          
        
//              <li key={props.key}>  
             
               
//                <div>
//                  <img src={curElem.img_url} alt="movie title name"  width="40%" height="20%"/>
//                </div>
//                   <h2>Name: {curElem.name}</h2>
//                  <h3>Rating: {curElem.rating}</h3>
//                  <p> Summary :{curElem.description} </p>
         
//                  <p>Genre:{curElem.genre}</p>
//                  <p> Caste:{curElem.cast} </p>
//                  <a href={curElem.watch_url} target="_blank" > <button>watch Now</button></a>
             
//             </li>
           
//       );
//   };
  
//   export default SeriesCard;



// the above code can aso be written as , and we can further destructure the above code as=======================================================================================


// export const SeriesCard=(props)=>{
//   console.log(props);

//   const {id , img_url , name , rating , description , cast , genre , watch_url} = props.curElem;    // Destructuring 
//     return(
        
      
//            <li>  
           
             
//              <div>
//                <img src={img_url} alt="movie title name"  width="40%" height="20%"/>
//              </div>
//                 <h2>Name: {name}</h2>
//                <h3>Rating: {rating}</h3>
//                <p> Summary :{description} </p>
       
//                <p>Genre:{genre}</p>
//                <p> Caste:{cast} </p>
//                <a href={watch_url} target="_blank" > <button>watch Now</button></a>
           
//           </li>
         
//     );
// };

// export default SeriesCard;


// the above code can also be written as =================================================================


// export const SeriesCard=({curElem})=>{
  

//   const {id , img_url , name , rating , description , cast , genre , watch_url} = curElem;    // Destructuring 
//     return(
        
      
//            <li>  
           
             
//              <div>
//                <img src={img_url} alt="movie title name"  width="40%" height="20%"/>
//              </div>
//                 <h2>Name: {name}</h2>
//                <h3>Rating: {rating}</h3>
//                <p> Summary :{description} </p>
       
//                <p>Genre:{genre}</p>
//                <p> Caste:{cast} </p>
//                <a href={watch_url} target="_blank" > <button>watch Now</button></a>
           
//           </li>
         
//     );
// };

// export default SeriesCard;



// passing jsx as props==================================================================

export const SeriesCard=({curElem})=>{
  

  const {id , img_url , name , rating , description , cast , genre , watch_url} = curElem;    // Destructuring 
    return(
        
      
           <li>  
           
             
             <div>
               <img src={img_url} alt="movie title name"  width="40%" height="20%"/>
             </div>
                <h2>Name: {name}</h2>
               <h3>Rating: {rating}</h3>
               <p> Summary :{description} </p>
       
               <p>Genre:{genre}</p>
               <p> Caste:{cast} </p>
               <a href={watch_url} target="_blank" > <button>watch Now</button></a>
           
          </li>
         
    );
};

export default SeriesCard;
