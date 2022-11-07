import "./contact.css";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Contact() {
  return (
    <section id="contact">
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>korsah.solomon31@gmail.com</h5>
            <a href="mailto:youremail@gmail.com">Send Me A Message</a>
          </article>

          <article className="contact__option">
            <AiOutlineFacebook />
            <h4>Messenger</h4>
            <h5>Korsah Solomon</h5>
            <a href="https://m.me/korsahsolomon" target="_blank">
              Send Me A Message
            </a>
          </article>

          <article className="contact__option">
            <AiFillTwitterCircle />
            <h4>Twitter</h4>
            <h5>@Korsah</h5>
            <a href="https://twitter.com/korsahsolo" target="_blank">
              Send Me A Message
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp />
            <h4>Whatsapp</h4>
            <h5>+233501961257</h5>
            <a
              href="https://api.whatsapp.com/send?phone=233501961257"
              target="_blank"
            >
              Send Me A Message
            </a>
          </article>
        </div>
        <form action="">
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
