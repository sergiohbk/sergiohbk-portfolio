import "./App.css";

const Firstpage = () => {
  return (
    <section className="firstpage">
      <div className="firstpage-container">
        <div className="circle-1 translate">
          <img src="images/circle.svg" contain alt="circle" />
        </div>
        <div className="circle-2 rotate">
          <img src="images/circles.svg" contain alt="circle" />
        </div>
        <div className="circle-1 var translate">
          <img src="images/circle.svg" contain alt="circle" />
        </div>
        <div className="firstpage-container-left">
          <h1>Sergio Portero Garcia</h1>
          <h2>Software developer</h2>
          <h3>Front End developer, Software developer</h3>
        </div>
        <div className="firstpage-container-right">
          <img src="images/stray.svg" height="600" width="650" alt="portrait" />
        </div>
      </div>
    </section>
  );
};

const Secondpage = () => {
  return (
    <section className="secondpage">
      <div className="secondpage-container"></div>
    </section>
  );
};

const Thirdpage = () => {
  return (
    <section className="thirdpage">
      <div className="thirdpage-container"></div>
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <Firstpage></Firstpage>
      <Secondpage></Secondpage>
      <Thirdpage></Thirdpage>
    </div>
  );
}

export default App;
