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
       <button>   <a href={seriesData[0].watch_url} target="_blank">Watch Now</a>  </button>
       <div>
          <img src={seriesData[1].img_url} alt="stranger"  width="40%" height="20%"/>
        </div>
           <h2>Name: {seriesData[1].name}</h2>
          <h3>Rating: {seriesData[1].rating}</h3>
          <p> Summary :{seriesData[1].description} </p>
  
          <p>Genre:{seriesData[1].genre}</p>
          <p> Caste: :{seriesData[1].cast} </p>
       <button>   <a href={seriesData[1].watch_url} target="_blank">Watch Now</a>  </button>
       <div>
          <img src={seriesData[2].img_url} alt="stranger"  width="40%" height="20%"/>
        </div>
           <h2>Name: {seriesData[2].name}</h2>
          <h3>Rating: {seriesData[2].rating}</h3>
          <p> Summary :{seriesData[2].description} </p>
  
          <p>Genre:{seriesData[2].genre}</p>
          <p> Caste: :{seriesData[2].cast} </p>
       <button>   <a href={seriesData[2].watch_url} target="_blank">Watch Now</a>  </button>
       <div>
          <img src={seriesData[3].img_url} alt="stranger"  width="40%" height="20%"/>
        </div>
           <h2>Name: {seriesData[3].name}</h2>
          <h3>Rating: {seriesData[3].rating}</h3>
          <p> Summary :{seriesData[3].description} </p>
  
          <p>Genre:{seriesData[3].genre}</p>
          <p> Caste: :{seriesData[3].cast} </p>
       <button>   <a href={seriesData[3].watch_url} target="_blank">Watch Now</a>  </button>
       <div>
          <img src={seriesData[4].img_url} alt="stranger"  width="40%" height="20%"/>
        </div>
           <h2>Name: {seriesData[4].name}</h2>
          <h3>Rating: {seriesData[4].rating}</h3>
          <p> Summary :{seriesData[4].description} </p>
  
          <p>Genre:{seriesData[4].genre}</p>
          <p> Caste: :{seriesData[4].cast} </p>
        <div>
          <img src={seriesData[5].img_url} alt="stranger"  width="40%" height="20%"/>
        </div>
           <h2>Name: {seriesData[5].name}</h2>
          <h3>Rating: {seriesData[5].rating}</h3>
          <p> Summary :{seriesData[5].description} </p>
  
          <p>Genre:{seriesData[5].genre}</p>
          <p> Caste: :{seriesData[5].cast} </p>
       <button>   <a href={seriesData[5].watch_url} target="_blank">Watch Now</a>  </button>
             
          
      </div>
    );
  
  };
  
  export default NetflixSeries; 
  
  
