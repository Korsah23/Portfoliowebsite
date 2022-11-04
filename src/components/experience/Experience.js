import "./experience.css";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Experience() {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> FrontEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experience__detailsIcon" />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__detailsIcon" />

              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__detailsIcon" />
              <div>
                <h4>REACT</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__detailsIcon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__detailsIcon" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3> BackEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experience__detailsIcon" />
              <div>
                <h4>PYTHON/DJANGO/FLASK</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__detailsIcon" />
              <div>
                <h4>MYSQL</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__detailsIcon" />
              <div>
                <h4>SQL LITE</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__otherlangs">
          <h3> Other Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experience__detailsIcon" />
              <div>
                <h4>JAVA/OOP</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__detailsIcon" />
              <div>
                <h4>C </h4>
                <small>Basic</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__others">
          <h3> Other Experiences</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experience__detailsIcon" />
              <div>
                <h4>BLOGGING</h4>
                <small>Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__detailsIcon" />
              <div>
                {" "}
                <h4>SEO</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__detailsIcon" />
              <div>
                <h4>SOCIAL MEDIA MARKETING</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
