import "./header.css";
import {
  AiOutlineLinkedin,
  AiFillTwitterCircle,
  AiOutlineGithub
} from "react-icons/ai";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/solomon-korsah-0716421b6" target="_blank" rel="noreferrer">
        <AiOutlineLinkedin />
      </a>
      <a href="https://mobile.twitter.com/korsahsolomun" target="_blank" rel="noreferrer">
        <AiFillTwitterCircle />
      </a>
      <a href="https://github.com/Korsah23" target="_blank" rel="noreferrer">
        <AiOutlineGithub />
      </a>
    </div>
  );
}
