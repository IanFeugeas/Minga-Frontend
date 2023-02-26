import "./App.css";
import Header from "./layouts/Header";
import Hero from "./components/Hero/Hero.jsx";
import Section from "./components/Section-down/Section";
import Form from "./components/Form/Form";

function App() {
  return (
    <div>
      <div className="background">
        <Header />
        <Hero />
      </div>
      <Section />
      <div className="secondView">
        <div className="conteinerForm">
          <Form />
        </div>
        <div className="divImage">
          <img className="imgback" src="./images/Rectangle 80.png" />
        </div>
      </div>
    </div>
  );
}

export default App;
