export const NetflixSeries =()=>{
  const name = "Stranger Things";
  const rating = "8.7";
  const age = 19;
  const canWatch =()=>{
  if(age>=18)  return "Watch Now";
  return "Not available";
}
const returnGenre = ()=>{
  const genre = "Fantasy";
  return genre;
};


  return (
    <div> 
      <div>
        <img src="Stranger.jpg" alt="stranger"  width="40%" height="20%"/>
      </div>
        <h2>Name: {name}</h2>
        <h3>Rating: {8+.9}</h3>
        <p> Summary : This is a fantastic series. This is a fantasy series. </p>

        <p>Genre:{returnGenre()}</p>
        <button>{canWatch()}</button>
    </div>
  )

}

// export default NetflixSeries; If we do not use this then  apply curly braces like {NetflixSeries} in App.jsx file

export const Footer = ()=>{
    return <p> We Can expoert Multiple </p>
}