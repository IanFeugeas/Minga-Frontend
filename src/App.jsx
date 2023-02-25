import "./App.css";

import NavBar from "./layouts/Header";
import Hero from "./components/Hero/Hero.jsx";
import Section from "./components/Section-down/Section";

function App() {
  return (
    <body>
      <div className="background">
        <NavBar />
        <Hero />
      </div>
      <Section />
    </body>

  );
}

export default App;
