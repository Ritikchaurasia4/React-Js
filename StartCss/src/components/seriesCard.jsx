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