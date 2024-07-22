 import seriesData from "../api/seriesData.json";
 export const NetflixSeries =()=>{

 return (
  
  <ul>
    {
      seriesData.map((curElem)=>{
        return(
          // Each child in a list should have a "key" prop.
       <li key={curElem.id}>  
       
         
         <div>
           <img src={curElem.img_url} alt="movie title name"  width="40%" height="20%"/>
         </div>
            <h2>Name: {curElem.name}</h2>
           <h3>Rating: {curElem.rating}</h3>
           <p> Summary :{curElem.description} </p>
   
           <p>Genre:{curElem.genre}</p>
           <p> Caste: :{curElem.cast} </p>
           <a href={curElem.watch_url} target="_blank" > <button>watch Now</button></a>
       
      </li>
      );
      })}
   </ul>
   );
 

}

export default NetflixSeries; 

// If we do not use this then  apply curly braces like {NetflixSeries} in App.jsx file

// export const Header = ()=>{
//     return <p> We Can expoert Multiple </p>
// }

// export const Footer = ()=>{
//     return <p> We Can expoert Multiple  </p>
// }