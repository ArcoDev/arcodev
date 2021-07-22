import imgLip from "./lip.PNG";
import imgAlchile from "./alchile.PNG";
import imgBalam from "./bicisbalam.PNG";
import imgRock from "./rocklag.PNG";
import imgCgeo from "./cgeotect.PNG";
import imgBlack from "./blackwolf.PNG";

const Projects = () => {
  return (
    <>
      <div id="projects" className="title-section">
        <h2>Conoce mi trabajo</h2>
      </div>
      <div className="container-card">
        <div className="card">
          <img src={imgLip} alt="Laguna industrial park" />
          <h2>Laguna Industrial Park</h2>
          <div className="links">
            <a href="https://github.com/ArcoDev/LIP">📃 Repositorio</a>
            <a href="https://lagunaindustrialpark.com/">👁️‍🗨️ Ver Sitio web</a>
          </div>
        </div>
        <div className="card">
          <img src={imgAlchile} alt="Alchile Studio" />
          <h2>Alchile Studio</h2>
          <div className="links">
            <a href="https://github.com/ArcoDev/new_alchile">📃 Repositorio</a>
            <a href="http://alchilestudio.com/">👁️‍🗨️ Ver Sitio web</a>
          </div>
        </div>
        <div className="card">
          <img src={imgCgeo} alt="cgeotec" />
          <h2>Cgeotec</h2>
          <div className="links">
            <a href="https://github.com/ArcoDev/cge">📃 Repositorio</a>
            <a href="http://cgeotec.com/">👁️‍🗨️ Ver Sitio web</a>
          </div>
        </div>
        <div className="card">
          <img src={imgBlack} alt="Black Wolf" />
          <h2>Black Wolf</h2>
          <div className="links">
            <a href="https://github.com/ArcoDev/blackWolf">📃 Repositorio</a>
            <a href="https://blackwolftrc.com/">👁️‍🗨️ Ver Sitio web</a>
          </div>
        </div>
        <div className="card">
          <img src={imgBalam} alt="Balam" />
          <h2>Bicicletas Balam</h2>
          <div className="links">
            <a href="https://github.com/ArcoDev/balam">📃 Repositorio</a>
            <a href="https://bicicletasbalam.com/">👁️‍🗨️ Ver Sitio web</a>
          </div>
        </div>
        <div className="card">
          <img src={imgRock} alt="Rock Lag" />
          <h2>Rock Lag</h2>
          <div className="links">
            <a href="https://github.com/ArcoDev/rocklag">📃 Repositorio</a>
            <a href="http://rocklag.com/">👁️‍🗨️ Ver Sitio web</a>
          </div>
        </div>
        <a
          href="https://github.com/ArcoDev?tab=repositories"
          className="btn-more"
        >
          Ver mas proyectos
        </a>
      </div>
    </>
  );
};
export default Projects;
