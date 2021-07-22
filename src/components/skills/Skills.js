import imgHtml from "./html5.svg";
import imgCss from "./css.svg";
import imgJs from "./js.svg";
import imgSass from "./sass.svg";
import imgPhp from "./php.svg";
import imgBotstrap from "./bootstrap.svg";
import imgGit from "./github.svg";
import imgMysql from "./mysql.svg";
import imgReact from "./react.svg";

const Skills = () => {
  return (
    <>
      <div id="skills" className="title-section">
        <h2>Skills</h2>
      </div>
      <div className="container-skill">
        <div className="box-skill">
          <img src={imgHtml} alt="html5" />
          <p>Html5</p>
        </div>
        <div className="box-skill">
          <img src={imgCss} alt="css3" />
          <p>CSS3</p>
        </div>
        <div className="box-skill">
          <img src={imgJs} alt="Javascript" />
          <p>Javascript</p>
        </div>
        <div className="box-skill">
          <img src={imgPhp} alt="PHP" />
          <p>Php</p>
        </div>
        <div className="box-skill">
          <img src={imgSass} alt="Sass" />
          <p>Sass</p>
        </div>
        <div className="box-skill">
          <img src={imgBotstrap} alt="Bootstrap" />
          <p>Bootstrap</p>
        </div>
        <div className="box-skill">
          <img src={imgGit} alt="Github" />
          <p>Github</p>
        </div>
        <div className="box-skill">
          <img src={imgReact} alt="React Js" />
          <p>React Js</p>
        </div>
        <div className="box-skill">
          <img src={imgMysql} alt="mysql" />
          <p>Mysql</p>
        </div>
      </div>
    </>
  );
};
export default Skills;
