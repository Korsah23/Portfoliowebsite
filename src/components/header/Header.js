import "./header.css";
import Cta from "./Cta";
import MeImg from "./me.png";
import HeaderSocials from "./HeaderSocials";

export default function Header() {
  return (
    <>
      <header>
        <div className="container header__container">
          <h5>Hello, I'm</h5>
          <h1>Korsah Solomon</h1>

          <h5 className="text-light">FullStack Developer</h5>
          <HeaderSocials />
          <div className="me">
            <img src={MeImg} alt="me" />
          </div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
}
