const CardProjects = ({ imgjpg, imgwebp, title, repository, webSite }) => {
  return (
    <div className="card">
      <picture>
        <source srcSet={imgwebp} type="image/webp"></source>
        <source srcSet={imgjpg} type="image/jpg"></source>
        <img src={imgwebp} alt="Imagen del sitio web" />
      </picture>
      <h2>{title}</h2>
      <div className="links">
        <a target="_blank" href={repository} rel="noreferrer">
          📃 Repositorio
        </a>
        <a target="_blank" href={webSite} rel="noreferrer">
          👁️‍🗨️ Ver Sitio web
        </a>
      </div>
    </div>
  );
};

export default CardProjects;
