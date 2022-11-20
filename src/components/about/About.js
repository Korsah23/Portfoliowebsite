import "./about.css";
import MeAbout from "./me-about.jpg";
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__meimage">
            <img src={MeAbout} alt="" className="about__meimage" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> 2+ Working Years </small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Users/Clients WorldWide</h5>
              <small> 50+ Clients </small>
            </article>

            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small> 10+ Completed Projects </small>
            </article>
          </div>
          <p>
            Ever since gaining the interest in programming and software, it has beeen my Life purusuit since then. 
            Although a healthscience student, my passion for computers and software developments has led me to enrolling  in a computer science program. 
            Ever since, I've taken several courses and porgrams on software development and coding. 
            With my extra skills in copywriting and blogging, I can promise to deliver to you your needed software development Projects. 
            From simple static websites, web applications and other sophisticated programs. 
            Bring your ideas,let me think about the development and deployment of it for you. 
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
}
