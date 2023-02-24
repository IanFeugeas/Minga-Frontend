import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-box">
      <div className="navbar">
        <section className="menuhamburguesa">
          <img src="/images/Menu (1).png" alt="menu" />
        </section>
        <section className="logo">
          <img src="/images/Logo(1) 3.png" alt="logo" />
        </section>
      </div>
      <div className="text-and-buttom">
        <h1 className="h1home">Your favorite comic book store ✨ </h1>
        <p className="phome">
          Explore our catalog to live the adventure of your life
        </p>
        <a className="buttomhome" href="#">
          Let's go!
        </a>
      </div>
    </div>
  );
}
