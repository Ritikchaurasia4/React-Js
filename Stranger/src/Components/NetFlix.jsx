 import seriesData from "../api/seriesData.json";
 export const NetflixSeries =()=>{

 return (
  <ul>
    <li>  
      
      <div> 
       
       <div>
         <img src={seriesData[0].img_url} alt="stranger"  width="40%" height="20%"/>
       </div>
          <h2>Name: {seriesData[0].name}</h2>
         <h3>Rating: {seriesData[0].rating}</h3>
         <p> Summary :{seriesData[0].description} </p>
 
         <p>Genre:{seriesData[0].genre}</p>
         <p> Caste: :{seriesData[0].cast} </p>
         <a href={seriesData[0].watch_url} target="_blank" > <button>watch Now</button></a>
     </div>
    </li>

    <li>  
      
      <div> 
       
       <div>
         <img src={seriesData[1].img_url} alt="stranger"  width="40%" height="20%"/>
       </div>
          <h2>Name: {seriesData[1].name}</h2>
         <h3>Rating: {seriesData[1].rating}</h3>
         <p> Summary :{seriesData[1].description} </p>
 
         <p>Genre:{seriesData[1].genre}</p>
         <p> Caste: :{seriesData[1].cast} </p>
         <a href={seriesData[1].watch_url} target="_blank" > <button>watch Now</button></a>
         
     </div>
    </li>
    <div> 
       
       <div>
         <img src={seriesData[2].img_url} alt="stranger"  width="40%" height="20%"/>
       </div>
          <h2>Name: {seriesData[2].name}</h2>
         <h3>Rating: {seriesData[2].rating}</h3>
         <p> Summary :{seriesData[2].description} </p>
 
         <p>Genre:{seriesData[2].genre}</p>
         <p> Caste: :{seriesData[2].cast} </p>
         <a href={seriesData[2].watch_url} target="_blank" > <button>watch Now</button></a>
     </div>
    <li>  
      
      <div> 
       
       <div>
         <img src={seriesData[3].img_url} alt="stranger"  width="40%" height="20%"/>
       </div>
          <h2>Name: {seriesData[3].name}</h2>
         <h3>Rating: {seriesData[3].rating}</h3>
         <p> Summary :{seriesData[3].description} </p>
 
         <p>Genre:{seriesData[3].genre}</p>
         <p> Caste: :{seriesData[3].cast} </p>
         <a href={seriesData[3].watch_url} target="_blank" > <button>watch Now</button></a>
         
     </div>
    </li>
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