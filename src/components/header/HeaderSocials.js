import "./header.css";
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineGithub
} from "react-icons/ai";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://linkedln.com" target="_blank" rel="noreferrer">
        <AiOutlineLinkedin />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <AiOutlineFacebook />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <AiOutlineGithub />
      </a>
    </div>
  );
}
