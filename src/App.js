import "./components/sass/app.scss";
import Nav from "./components/navbar/nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Up from "./components/up/Up";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      {/* <Skills />
      <Projects />
      <Footer /> */}
      <Up />
    </>
  );
}

export default App;
