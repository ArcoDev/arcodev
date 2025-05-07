import imgAboutPng from "../../images/christian-web.png";
import imgAboutWebp from "../../images/christian-web.webp";
import codeJpg from "../../images/code.jpg";
import codeWebp from "../../images/code.webp";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-image">
          <picture>
            <source srcSet={codeWebp} type="image/webp" />
            <source srcSet={codeJpg} type="image/jpeg" />
            <img className="img-code" src={codeWebp} loading="lazy" alt="img-code" />
          </picture>        
          <picture>
            <source srcSet={imgAboutPng} type="image/webp" />
            <source srcSet={imgAboutWebp} type="image/jpeg" />
            <img className="img-about" src={imgAboutWebp} loading="lazy" alt="img-about" />
          </picture> 
        </div>
        <div className="about-text">
          <h3>Sobre Mi</h3>
          <h4>🧑‍💻 Desarrollador Full Stack con enfoque en resultados.</h4>
          <p>➕ De 5 años de experiencia profesional en desarrollo web, me especializo en crear interfaces modernas, responsivas y orientadas a la mejor experiencia de usuario.</p>
          <p>📚 Me mantengo en constante aprendizaje, actualizándome con las tecnologías más demandadas del mercado para ofrecer siempre un trabajo competitivo y de calidad.</p>
          <p>🚀 Si buscas a alguien comprometido, creativo y con visión técnica para llevar tu proyecto al siguiente nivel, ¡estás en el lugar correcto!</p>
          <div className="boxBtnPortafolio">
            <a href="#portafolio">Ver mi trabajo 👇</a> 
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
