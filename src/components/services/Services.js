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
              <p>Lorem ipsum dolor sit ame</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Lorem ipsum dolor sit ame</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Lorem ipsum dolor sit ame</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Lorem ipsum dolor sit ame</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Lorem ipsum dolor sit ame</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEV*/}

        <article className="service">
          <div className="service__head">
            <h3>Debugging Of Code</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Static websites</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Interactive web applications</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Lorem ipsum dolor sit ame</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Lorem ipsum dolor sit ame</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Lorem ipsum dolor sit ame</p>
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
              <p>Lorem ipsum dolor sit ame</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Lorem ipsum dolor sit ame</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Lorem ipsum dolor sit ame</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Lorem ipsum dolor sit ame</p>
            </li>
            <li>
              <AiOutlineCheck className="service__listicon" />
              <p>Lorem ipsum dolor sit ame</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
