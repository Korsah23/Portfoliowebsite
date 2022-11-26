import "./portfolio.css";
import PortImg1 from "./PortImg1.jpg";
import PortImg2 from "./PortImg2.png";
import PortImg3 from "./UrlShort.jpg";


export default function Portfolio() {
     //set the state for getting testimonials 
 
  return (
    <section id="portfolio">
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      <article className="portfolio__item">
            <div className="portfolio__itemimage">
              <img src={PortImg2} alt="" />
            </div>
            <h3>Portfolio Website(React/Django/css)</h3>
            <div className="portfolio__itemcta">
              <a href="https://github.com/Korsah23/Portfoliowebsite" className="btn" target="_blank">
                GitHub
              </a>
              <a
                href="#"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__itemimage">
              <img src={PortImg1} alt="" />
            </div>
            <h3>Weather Detector(Django/Html/Bootstrap)</h3>
            <div className="portfolio__itemcta">
              <a href="https://github.com/Korsah23/weatherdetector" className="btn" target="_blank">
                GitHub
              </a>
              <a
                href="#"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__itemimage">
              <img src={PortImg3} alt="" />
            </div>
            <h3>Url Shortener(Django/Html/Bootstrap)</h3>
            <div className="portfolio__itemcta">
              <a href="https://github.com/Korsah23/urlshortenerproject" className="btn" target="_blank">
                GitHub
              </a>
              <a
                href="#"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>

        


      </div>

    </section>
  );
}
