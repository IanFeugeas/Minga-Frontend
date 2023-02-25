import React from "react";
import "./hero.css";

function Hero(props) {
  return (
    <section className="hero-box">
      <div>
        <h1 className="h1home">Your favorite comic book store ✨ </h1>
      </div>
      <div>
        <p className="phome">
          Explore our catalog to live the adventure of your life
        </p>
      </div>
      <div>
        <button className="buttomHome">
          <p className="textbtn">Let's go!</p>
        </button>
      </div>
    </section>
  );
}

export default Hero;
