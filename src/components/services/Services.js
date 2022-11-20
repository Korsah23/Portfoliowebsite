import "./services.css";
import { AiOutlineCheck } from "react-icons/ai";

export default function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Frontend Development</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Backend/Api Development</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Deploying/Hosting</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Testing</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p></p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEV*/}

        <article className="service">
          <div className="service__head">
            <h3>WordPress Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>WordPress Hosting</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Wordpress Website Design</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>WordPress SEO</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>LWordPress Plugins Integration</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Wordpress Debugging</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Blogging</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>CopyWriting</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>KeyWord Research</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Seo Boosting</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
