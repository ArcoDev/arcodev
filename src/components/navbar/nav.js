const Nav = () => {
  //Variables
  const logo = "<arcodev/>";
  //funcion para cambiar el tema mediante el switch
  /*const theme = () => {
    //const swTheme = document.querySelector('#switch')
    const body = document.querySelector("body");
    const configUserTheme = window.matchMedia("(prefers-color-scheme: dark)");

    const localConfig = localStorage.getItem("tema");
    if (localConfig === "dark") {
      body.classList.toggle("dark-theme");
    } else if (localConfig === "light") {
      body.classList.toggle("light-theme");
    }
    console.log("cambiando...");
    let colorTheme;
    if (configUserTheme.matches) {
      body.classList.toggle("light-theme");
      colorTheme = body.classList.contains("light-theme") ? "light" : "dark";
    } else {
      body.classList.toggle("dark-theme");
      colorTheme = body.classList.contains("dark-theme") ? "dark" : "light";
    }
    localStorage.setItem("tema", colorTheme);
  };*/

  //cambiar los span del menu hamburguesa
  const transformNav = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("transform-nav");
    const items = document.getElementById("items");
    items.classList.remove("close-nav");
    const boxItem = document.getElementById("box-item");
    boxItem.classList.toggle("anima-nav");
  };
  //cerrar menu mediante los enlaces
  const closeNav = () => {
    const items = document.getElementById("items");
    items.classList.add("close-nav");
    const menu = document.getElementById("menu");
    menu.classList.remove("transform-nav");
    const boxItem = document.getElementById("box-item");
    boxItem.classList.remove("anima-nav");
  };

  return (
    <>
      <nav className="navegation">
        <div className="box-logo">
          <a href="index.html" title="arcodev">
            <h2>{logo}</h2>
          </a>
        </div>
        <div id="box-item" className="box-items">
          <ul id="items" className="items" onClick={closeNav}>
            <li>
              <a href="index.html">Inicio</a>
            </li>
            <li>
              <a href="#about">Sobre mi</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#contact">Contactame</a>
            </li>
          </ul>
        </div>
        <div className="box-switch">
          <div className="switch">
            <span>Cambiar Tema</span>
            <input type="checkbox" id="switch" />
            <label for="switch" className="lbl"></label>
          </div>
        </div>
        <div id="menu" className="menu" onClick={transformNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};
export default Nav;
