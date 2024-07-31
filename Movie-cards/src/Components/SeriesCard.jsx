// import seriesData from "../api/seriesData.json";
export const SeriesCard=(props)=>{
  console.log(props);
    return(
        
      
           <li key={props.key}>  
           
             
             <div>
               <img src={props.curElem.img_url} alt="movie title name"  width="40%" height="20%"/>
             </div>
                <h2>Name: {props.curElem.name}</h2>
               <h3>Rating: {props.curElem.rating}</h3>
               <p> Summary :{props.curElem.description} </p>
       
               <p>Genre:{props.curElem.genre}</p>
               <p> Caste:{props.curElem.cast} </p>
               <a href={props.curElem.watch_url} target="_blank" > <button>watch Now</button></a>
           
          </li>
         
    );
};

export default SeriesCard;