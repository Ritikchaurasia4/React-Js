import NetflixSeries from "./components/netflix";
import "./components/Netflix.css";
export const App =()=>{
    return(
        <section className="container">
            <h1 className="card-heading"> List of Best <font style={{color:"red"}}>Netflix </font>series </h1>
            <NetflixSeries/>
        </section>
    ) 
    
}
export default App;