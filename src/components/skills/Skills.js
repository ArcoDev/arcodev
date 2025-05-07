import imgHtml from "../../images/html5.svg";
import imgCss from "../../images/css.svg";
import imgJs from "../../images/js.svg";
import imgSass from "../../images/sass.svg";
import imgPhp from "../../images/php.svg";
import imgBotstrap from "../../images/bootstrap.svg";
import imgGit from "../../images/github.svg";
import imgMysql from "../../images/mysql.svg";
import imgReact from "../../images/react.svg";
import BoxSkill from "../box-skill/Box-skill";
import imgDevExtreme from "../../images/devExtreme.svg";
import useHover from "./HoverCard";

const Skills = () => {
  const listBoxInfo = [
    {
      id: 1,
      img: imgHtml,
      text: "HTML5",
    },
    {
      id: 2,
      img: imgCss,
      text: "CSS3",
    },
    {
      id: 3,
      img: imgJs,
      text: "JAVASCRIPT",
    },
    {
      id: 4,
      img: imgPhp,
      text: "PHP",
    },
    {
      id: 5,
      img: imgDevExtreme,
      text: "DevExtreme",
    },
    {
      id: 6,
      img: imgGit,
      text: "GIT/GITHUB",
    },
    {
      id: 7,
      img: imgMysql,
      text: "MYSQL",
    },
    {
      id: 8,
      img: imgBotstrap,
      text: "BOOTSTRAP",
    },
    {
      id: 9,
      img: imgReact,
      text: "REACT JS",
    },
    {
      id: 10,
      img: imgSass,
      text: "Sass",
    },
  ];
  const [hoverRef, isHovered] = useHover();
  return (
    <>
      <div id="skills" className="anchor"></div>
      <div className="title-section">
        <h2>Skills</h2>
      </div>
      <div className="scroll-skill">
        <div
          className={`container-skill ${isHovered ? "paused" : ""}`}
          ref={hoverRef}
        >
          {[...listBoxInfo, ...listBoxInfo].map((listBox, index) => (
            <BoxSkill key={index} {...listBox} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Skills;
