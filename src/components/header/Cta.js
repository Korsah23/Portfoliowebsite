import "./header.js";
import CV from "./Cta";

export default function Cta() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#Contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}
