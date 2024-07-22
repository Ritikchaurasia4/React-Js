// first of all we shall be get the jason file 

import seriesData from "../api/seriesData.json";  // json file

export const NetflixSeries =()=>{
 
    return (
      <div> 
       
        <div>
          <img src={seriesData[0].img_url} alt="stranger"  width="40%" height="20%"/>
        </div>
           <h2>Name: {seriesData[0].name}</h2>
          <h3>Rating: {seriesData[0].rating}</h3>
          <p> Summary :{seriesData[0].description} </p>
  
          <p>Genre:{seriesData[0].genre}</p>
          <p> Caste: :{seriesData[0].cast} </p>
          <a href={seriesData[0].watch_url} target="_blank"></a>
          <button>watch Now</button>
      </div>
    );
  
  };
  
  export default NetflixSeries; 
  
  
