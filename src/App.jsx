import "./App.css";

import Header from "./layouts/Header";
import Hero from "./components/Hero/Hero.jsx";
import Section from "./components/Section-down/Section";

function App() {
  return (
    <body>
      <div className="background">
        <Header />
        <Hero />
      </div>
      <Section />
    </body>
  );
}

export default App;
