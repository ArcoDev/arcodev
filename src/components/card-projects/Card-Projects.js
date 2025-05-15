import BoxSkill from "../box-skill/Box-skill";
import { FaGithub } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
const CardProjects = ({ imgjpg, imgwebp, title, description, repository, webSite, technologies, links }) => {
  return (
    <article className="card-project">
      <header className="image-container">
        <picture>
          <source srcSet={imgwebp} type="image/webp" />
          <source srcSet={imgjpg} type="image/jpg" />
          <img src={imgwebp} alt={`Captura del proyecto ${title}`} />
        </picture>
      </header>
      <section className="project-details">
        <h2>{title}</h2>
        <p>
          {description}
        </p>
        <div className="project-technologies">
          {technologies.map((tech) => (
            <BoxSkill 
              key={tech.id}
              img={tech.img || ""} 
              // text={tech.text}
              className="box-tech"
            />
          ))}
        </div>
      </section>
      <footer className="project-links">
        {links && (
          <>
            <a href={repository} target="_blank" rel="noreferrer" title="Repositorio">
              <FaGithub />
            </a>
            <a href={webSite} target="_blank" rel="noreferrer" title="Ver Sitio">
              <FaEye />
            </a>
          </>
        )}
      </footer>
    </article>
  );
};

export default CardProjects;
