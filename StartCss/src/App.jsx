

import NetflixSeries from "./components/netflix";
import "./components/Netflix.css";
export const App =()=>{
    return(
        <section className="container">
            <h1 className="card-heading"> List of Best Netflix series </h1>
            <NetflixSeries/>
        </section>
    ) 
    
}
export default App;