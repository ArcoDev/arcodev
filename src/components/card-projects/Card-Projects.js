import BoxSkill from "../box-skill/Box-skill";
const CardProjects = ({ imgjpg, imgwebp, title, repository, webSite, technologies }) => {
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          facilisis, nunc at bibendum fringilla, nisi nunc faucibus nisi, nec
          tincidunt nunc nunc eget nunc.
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
        <a href={repository} target="_blank" rel="noreferrer" title="Repositorio">
          🧾
        </a>
        <a href={webSite} target="_blank" rel="noreferrer" title="Ver Sitio">
          🌐
        </a>
      </footer>
    </article>
  );
};

export default CardProjects;
