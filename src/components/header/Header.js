import arco from "./arco.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="box-header im-info">
        <h2 className="title">
          Hola mi nombre es <br /> <span>Christian Acosta 👋 </span>
        </h2>
        <p className="description">
          Soy Desarrollador Web
          <span> frontend 💻</span>
        </p>
        <a className="btn-global" href="CV-ARCO.pdf" download="">
          Descarga mi currículum
        </a>
      </div>
      <div className="box-header photo">
        <img src={arco} alt="Christian Acosta" />
      </div>
    </header>
  );
};
export default Header;
