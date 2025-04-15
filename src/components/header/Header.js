import arcowebp from "../../images/acosta.webp";
import arcojpg from "../../images/acosta.png";
import cv from './cv-christian-2024.pdf';
import email from '../../components/contact/email.svg';
import linkedin from '../../components/contact/linkedin.svg';
import js from '../../images/js.svg'
import whats from '../../images/whatsapp.svg'
import css from '../../images/css.svg'
import html from '../../images/html5.svg'
import 'animate.css'



const Header = () => {
  return (
    <header className="header">
      <section className="presentation animate__animated animate__fadeInLeft">
        <p>Bienvenidos!!!</p>
        <h1>Mi nombre es: <span className="header-name">Christian Acosta</span></h1>
        <h3 className="carrer">Desarrollador Web</h3>
        <div className="header-boxAcctions">
        <a href={cv} download className="header-btnCV">
          Descarga mi currículum
        </a>
        <div className="contact">
          <a href="mailto:arcodev07@gmail.com" className="header-btnWhatss">
            <img src={email} alt="icon-contact-email" />
          </a>
          <a href="https://acortar.link/c2XF5M" className="header-btnWhatss">
            <img src={linkedin} alt="icon-contact-linkedin" />
          </a>
          <a href="https://wa.link/sp3vyk" className="header-btnWhatss">
            <img src={whats} alt="icon-contact-whatsapp" />
          </a>
        </div>
      </div>
      </section>
      <section className="image-profile animate__animated animate__fadeInRight">
        <div className="cuadrado"></div>
        <span className="card-skill js">
          <img src={js} alt="icon-js" />
        </span>
        <span className="card-skill css">
          <img src={css} alt="icon-css" />
        </span>
        <span className="card-skill html">
          <img src={html} alt="icon-html" />
        </span>
        <picture>
          <source srcSet={arcowebp} type="image/webp" />
          <source srcSet={arcojpg} type="image/jpeg" />
          <img className="header-imgInitial" src={arcojpg} alt="Christian Acosta" />
        </picture>
      </section>
    </header>
  );
};
export default Header;
  