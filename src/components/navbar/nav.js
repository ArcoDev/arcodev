import React, { useState, useRef } from 'react';

const Nav = () => {
  const logo = "<arcodev/>";
  const [navOpen, setNavOpen] = useState(false);
  const itemsRef = useRef();
  const boxItemRef = useRef();
  const menuRef = useRef();

  const transformNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <nav className="navegation">
      <div className="box-logo">
        <a href="index.html" title="arcodev">
          <h2>{logo}</h2>
        </a>
      </div>

      <div
        ref={boxItemRef}
        className={`box-items ${navOpen ? 'anima-nav' : ''}`}
      >
        <ul
          ref={itemsRef}
          className={`items ${!navOpen ? 'close-nav' : ''}`}
          onClick={closeNav}
        >
          <li><a href="index.html">Inicio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Proyectos</a></li>
          {/* <li><a href="#contact">Contáctame</a></li> */}
        </ul>
      </div>

      <div className="box-switch">
        <div className="switch">
          <span>Cambiar Tema</span>
          <input type="checkbox" id="switch" checked disabled />
          <label htmlFor="switch" className="lbl"></label>
        </div>
      </div>

      <div
        ref={menuRef}
        id="menu"
        className={`menu ${navOpen ? 'transform-nav' : ''}`}
        onClick={transformNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Nav;
