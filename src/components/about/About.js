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
              <small> 200+ Clients </small>
            </article>

            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small> 20+ Completed Projects </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
}
