import "./portfolio.css";
import PortImg1 from "./portfolio1.jpg";
import PortImg2 from "./portfolio2.jpg";
import PortImg3 from "./portfolio3.jpg";
import PortImg4 from "./portfolio4.jpg";
import PortImg5 from "./portfolio5.png";
import PortImg6 from "./portfolio6.jpg";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__itemimage">
            <img src={PortImg1} alt="" />
          </div>
          <h3>This Is A Portfolio Item Title</h3>
          <div className="portfolio__itemcta">
          <a href="htttps://github.com" className="btn" target="_blank">
            GitHub
          </a>
          <a
            href="https://dribbble.com/lstore_graphics"
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
          <h3>This Is A Portfolio Item Title</h3>
          <div className="portfolio__itemcta">
          <a href="htttps://github.com" className="btn" target="_blank">
            GitHub
          </a>
          <a
            href="https://dribbble.com/lstore_graphics"
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
          <h3>This Is A Portfolio Item Title</h3>
          <div className="portfolio__itemcta">
          <a href="htttps://github.com" className="btn" target="_blank">
            GitHub
          </a>
          <a
            href="https://dribbble.com/lstore_graphics"
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
          <h3>This Is A Portfolio Item Title</h3>
          <div className="portfolio__itemcta">
          <a href="htttps://github.com" className="btn" target="_blank">
            GitHub
          </a>
          <a
            href="https://dribbble.com/lstore_graphics"
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
          <h3>This Is A Portfolio Item Title</h3>
          <div className="portfolio__itemcta">
          <a href="htttps://github.com" className="btn" target="_blank">
            GitHub
          </a>
          <a
            href="https://dribbble.com/lstore_graphics"
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
          <h3>This Is A Portfolio Item Title</h3>
          <div className="portfolio__itemcta">
          <a href="htttps://github.com" className="btn" target="_blank">
            GitHub
          </a>
          <a
            href="https://dribbble.com/lstore_graphics"
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
