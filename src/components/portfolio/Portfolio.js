import "./portfolio.css";

import axios from "axios";
import React, {useState,useEffect} from "react";

export default function Portfolio() {
     //set the state for getting testimonials 
 const [portfolios,setPortfolios] = useState([]);
 
 //make API request with axios
 useEffect(() => {
  axios.get("https://portfoliobackend123.herokuapp.com/portfolio/").then((res)=>{
    console.log(res.data)
    setPortfolios(res.data)
  }
  
  )
 }
 
 ,[])
  


  return (
    <section id="portfolio">
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
  {
        portfolios.map((portfolio)=> {
          return (
            <article className="portfolio__item" key={portfolio.project}>
            <div className="portfolio__itemimage">
              <img src={portfolio.portfolioImage} alt="" />
            </div>
            <h3>{portfolio.project}</h3>
            <div className="portfolio__itemcta">
              <a href={portfolio.githubLink} className="btn" target="_blank">
                GitHub
              </a>
              <a
                href={portfolio.liveDemoLink}
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          )

        }
        
        
        )
      }
        


      </div>

    </section>
  );
}
