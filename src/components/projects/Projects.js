import CardProjects from "../card-projects/Card-Projects";
//Imagenes webp
import lipwebp from '../../images/lip.webp';
import alchilewebp from '../../images/alchile.webp';
import cgeotecwebp from '../../images/cgeotect.webp';
import blackwolfwebp from '../../images/blackwolf.webp';
import balamwebp from '../../images/bicisbalam.webp';
import rocklagwebp from '../../images/rocklag.webp';
//Imagenes jpg
import lipjpg from '../../images/lip.jpg';
import alchilejpg from '../../images/alchile.jpg';
import cgeotecjpg from '../../images/cgeotect.jpg';
import blackwolfjpg from '../../images/blackwolf.jpg';
import balamjpg from '../../images/bicisbalam.jpg';
import rocklagjpg from '../../images/rocklag.jpg';



const Projects = () => {
  const cardList = [
    {
      id: 1,
      img_jpg: lipjpg,
      img_webp: lipwebp,
      title: "Laguna insdustrial Park",
      repository: "https://github.com/ArcoDev/LIP",
      webSite: "https://lagunaindustrialpark.com/",
    },
    {
      id: 2,
      img_jpg: alchilejpg,
      img_webp: alchilewebp,
      title: "Alchile Studio",
      repository: "https://github.com/ArcoDev/new_alchile",
      webSite: "https://alchilestudio.com/",
    },
    {
      id: 3,
      img_jpg: cgeotecjpg,
      img_webp: cgeotecwebp,
      title: "Cgeotect",
      repository: "https://github.com/ArcoDev/cge",
      webSite: "https://cgeotec.com/",
    },
    {
      id: 4,
      img_jpg: blackwolfjpg,
      img_webp: blackwolfwebp,
      title: "Black Wolf",
      repository: "https://github.com/ArcoDev/blackwolf",
      webSite: "https://blackwolftrc.com/",
    },
    {
      id: 5,
      img_jpg: balamjpg,
      img_webp: balamwebp,
      title: "Bicicletas Balam",
      repository: "https://github.com/ArcoDev/balam",
      webSite: "https://bicicletasbalam.com/",
    },
    {
      id: 6,
      img_jpg: rocklagjpg,
      img_webp: rocklagwebp,
      title: "Rock Lag",
      repository: "https://github.com/ArcoDev/rocklag",
      webSite: "https://rocklag.com/",
    },
  ];
  return (
    <>
      <div id="projects" className="anchor"></div>
      <div className="title-section">
        <h2>Conoce mi trabajo</h2>
      </div>
      <div className="container-card">
        {cardList.map(({ id, img_jpg, img_webp, title, repository, webSite }) => (
          <CardProjects
            key={id}
            imgjpg={img_jpg}
            imgwebp={img_webp}
            title={title}
            repository={repository}
            webSite={webSite}
          />
        ))}
        <a
          target="_blank"
          href="https://github.com/ArcoDev?tab=repositories"
          className="btn-more"
          rel="noreferrer"
        >
          Ver mas proyectos
        </a>
      </div>
    </>
  );
};

export default Projects;
