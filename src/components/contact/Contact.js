import linkedin from "./linkedin.svg";
import email from "./email.svg";
import whats from "./whatsapp.svg";
const Contact = () => {
  return (
    <>
      <div id="contact" className="title-section">
        <h2>Contactame</h2>
      </div>
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/christan-osvaldo-acosta-ram%C3%ADrez-99aa25192/"
          className="links"
        >
          <img src={linkedin} alt="linkedin" />
          <p>Linkedin</p>
        </a>
        <a href="mailto:arcodev07@gmail.com" className="links">
          <img src={email} alt="linkedin" />
          <p>Email</p>
        </a>
        <a href="https://wa.link/rr5urp" className="links">
          <img src={whats} alt="linkedin" />
          <p>Whatsapp</p>
        </a>
      </div>
    </>
  );
};
export default Contact;
