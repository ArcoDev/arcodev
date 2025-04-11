import imgAbout from "../../images/about.svg";

const About = () => {
  return (
    <>
      <div id="about" className="anchor"></div>
      <div className="title-section">
        <h2>Sobre mi</h2>
      </div>
      <section className="about">
        <div className="box box-about">
          <img src={imgAbout} className="img-about" alt="about me" />
        </div>
        <div className="box text-about">
          <p>
            Tengo aproximadamente 2 años trabajando profesionalmente en este
            mundo del desarrollo web, sobre todo he estado en el frontend, me
            gusta todo lo que tiene que ver con desarrollo web, hoy al día sigo
            capacitandome en la nuevas tecnologías que estan solicitando en el
            mercado laboral, he realizado varios sitios web de manera responsiva
            y tratando de realizar simpre buenas practicas de desarrollo, te
            invito a ver mi trabajo aquí 👇
          </p>
          <button className="btn-about">Portafolio</button>
        </div>
      </section>
    </>
  );
};
export default About;
