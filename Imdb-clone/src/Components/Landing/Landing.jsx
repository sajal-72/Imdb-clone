import { useEffect, useState } from "react"
import "./landing.css"
import { categoriesMovies } from "../../Services/Api"
import { NOWPLAYING_API_URL } from "../../Constants/Constants"
import Banner from "./Banner"
import Upnext from "./Upnext"
import Slides from "./Slides"



const Landing = () => {

const[movies, setMovies]=useState([]);

  useEffect(()=>{
    const getData=async()=>{
      let response =await categoriesMovies(NOWPLAYING_API_URL);
      setMovies(response.results); 
    }
      getData();
  }, [])

  return (
    
    <div className="landing">
        <div style={{display:'flex'}}>
        <Banner movies={movies}/>
        <Upnext movies={movies}/>
        </div>
       


        <div className="head">
        <h1 className="h">What To Watch</h1>
        <p>Get More Recommendations<i class="fa-solid fa-angle-right"></i></p>
        </div>

        <div className="top">
            <h1 className="he">Top Picks<i class="fa-solid fa-angle-right"></i></h1>
            <p>TV Shows and Movies just for You</p>
        </div>
      <Slides movies={movies}/>
      <Slides movies={movies}/>
      <Slides movies={movies}/>
    </div>
  )
}

export default Landing