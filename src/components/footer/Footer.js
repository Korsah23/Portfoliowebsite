import "./footer.css";

import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        SOLO
      </a>
      <ul className="permalinks">
        <li>
          {" "}
          <a href="#">Home</a>
        </li>
        <li>
          {" "}
          <a href="#contact">contact</a>
        </li>
        <li>
          {" "}
          <a href="#about">About</a>
        </li>
        <li>
          {" "}
          <a href="#experience">Experience</a>
        </li>
        <li>
          {" "}
          <a href="#services">Services</a>
        </li>
        <li>
          {" "}
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          {" "}
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          {" "}
          <AiOutlineFacebook />
        </a>
        <a href="https://instagram.com">
          <AiOutlineInstagram />
        </a>
        <a href="https://Twitter.com">
          <AiFillTwitterCircle />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Korsah. All Rights Reserved</small>
      </div>
    </footer>
  );
}
