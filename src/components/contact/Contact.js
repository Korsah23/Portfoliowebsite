import "./contact.css";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_za8o30p",
      "template_b9yi3kf",
      form.current,
      "3CdyTAFR8DenECsZ1"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__optionicon" />
            <h4>Email</h4>
            <h5>korsah.solomon31@gmail.com</h5>
            <a href="mailto:korsahsolomon78@gmail.com">Send Me A Message</a>
          </article>

          <article className="contact__option">
            <AiFillLinkedin className="contact__optionicon" />
            <h4>linkedin</h4>
            <h5>Korsah Solomon</h5>
            <a href="https://www.linkedin.com/in/solomon-korsah-0716421b6" target="_blank">
              Send Me A Message
            </a>
          </article>

          <article className="contact__option">
            <AiFillTwitterCircle className="contact__optionicon" />
            <h4>Twitter</h4>
            <h5>@Korsah</h5>
            <a href="https://mobile.twitter.com/korsahsolomun" target="_blank">
              Send Me A Message
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__optionicon" />
            <h4>Whatsapp</h4>
            <h5>+233592537928</h5>
            <a
              href="https://api.whatsapp.com/send?phone=233592537928"
              target="_blank"
            >
              Send Me A Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
