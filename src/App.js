import { useEffect } from "react";
import "./App.css";
import "./Secondpage.css";
import "./Thirdpage.css";
import lax from "lax.js";

const Firstpage = () => {
  return (
    <section className="firstpage">
      <div className="firstpage-container">
        <div className="circle-1 translate">
          <img src="images/circle.svg" alt="circle" />
        </div>
        <div className="circle-5 lax lax_preset_spin">
          <img src="images/circles.svg" alt="circle" />
        </div>
        <div className="circle-1 var translate">
          <img src="images/circle.svg" alt="circle" />
        </div>
        <div className="circle-3 translate-2">
          <img src="images/circle.svg" alt="circle" />
        </div>
        <div className="circle-4 translate-3">
          <img src="images/circle.svg" alt="circle" />
        </div>
        <div className="circle-2 var translate-4">
          <img src="images/circle.svg" alt="circle" />
        </div>
        <div className="firstpage-container-left lax lax_preset_blurInOut:100:10">
          <h1>Sergio Portero Garcia</h1>
          <h2>Desarrollador Front End</h2>
          <h3>Apasionado de las tecnologias y autodidacta</h3>
        </div>
        <div className="firstpage-container-right lax lax_preset_blurInOut:100:10">
          <img src="images/stray.svg" height="600" width="650" alt="portrait" />
        </div>
      </div>
    </section>
  );
};

const Secondpage = () => {
  return (
    <section className="secondpage">
      <div className="secondpage-container">
        <div className="about">
          <h1 className="lax lax_preset_fadeIn">Sobre mi</h1>
          <p className="lax lax_preset_fadeIn">
            Desde siempre me ha interesado la programacion y ver las cosas que
            se pueden conseguir, hace mas de 8 años aprendí a programar por mi
            propia cuenta con el objetivo de hacer videojuegos para Android, asi
            fue aprendiendo a usar Java y después aplicandolo a Android con
            libGDX.
          </p>
          <p className="lax lax_preset_fadeIn">
            Poco después aprendí Unity con el objetivo de hacer videojuegos mas
            complejos, aprendí con ello C#. Desde entonces continue aprendiendo
            nuevas tecnologias, no solo programacion, tambien diseño, diseño 3D,
            entre otras cosas.
          </p>
          <p className="lax lax_preset_fadeIn">
            Hace unos 2 años entre en el mundo del desarrollo web y me llamó
            mucho la atención por lo que pensé en dedicarme a ello; por mi
            cuenta aprendí Vue y algo de NodeJS, actualmente estoy aprendiendo
            React de la mano de OpenBootcamp.
            <p>
              Me considero una persona con gran adaptación a cualquier
              tecnologia y con una gran capacidad de aprendizaje de estas.
            </p>
            <p>
              Me encantan los retos y entender como funcionan por dentro las
              tecnologias.
            </p>
            <p>
              Tengo gran facilidad para aprender desde el idioma ingles y desde
              cualquier tipo de documentación técnica.
            </p>
          </p>
        </div>
        <div className="description">
          <h3>Habilidades</h3>
        </div>
        <div className="skills">
          <div>
            <img
              src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
              alt="javascript"
            />
          </div>
          <div>
            <img
              src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
              alt="html5"
            />
          </div>
          <div>
            <img
              src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
              alt="css3"
            />
          </div>
          <div>
            <img
              src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
              alt="react"
            />
          </div>
          <div>
            <img
              src="https://cdn.worldvectorlogo.com/logos/vue-9.svg"
              alt="vue"
            />
          </div>
          <div>
            <img
              src="https://cdn.worldvectorlogo.com/logos/c--4.svg"
              alt="c#"
            />
          </div>
          <div>
            <img
              src="https://cdn.worldvectorlogo.com/logos/java-4.svg"
              alt="java"
            />
          </div>
          <div>
            <img
              src="https://cdn.worldvectorlogo.com/logos/python-4.svg"
              alt="python"
            />
          </div>
          <div>
            <img
              src="https://cdn.worldvectorlogo.com/logos/sass-1.svg"
              alt="sass"
            />
          </div>
          <div>
            <img
              src="https://cdn.worldvectorlogo.com/logos/git-icon.svg"
              alt="git"
            />
          </div>
          <div>
            <img
              //bootstrap
              src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg"
              alt="bootstrap"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Thirdpage = () => {
  return (
    <section className="thirdpage">
      <div className="thirdpage-container">
        <div className="projects-container">
          <h1>Proyectos</h1>
          <Card />
        </div>
      </div>
    </section>
  );
};

function App() {
  useEffect(() => {
    // Setup lax
    window.lax = { presets: lax.presets };
    lax.init();

    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });
  }, []);

  return (
    <div className="App">
      <Firstpage></Firstpage>
      <Secondpage></Secondpage>
      <Thirdpage></Thirdpage>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-image">
          <img src={props.image} alt="project" />
        </div>
        <div className="card-description">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
        <div className="card-links">
          <a href={props.github}>
            <img
              src="https://img.icons8.com/color/48/000000/github.png"
              alt="github"
            />
          </a>
          <a href={props.link}>
            <img
              src="https://img.icons8.com/color/48/000000/link.png"
              alt="link"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
