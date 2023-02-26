import React from "react";
import "./welcome.css";
import Logoform from "../Logo-form/Logoform";
import H2 from "../H2-welcome/H2";

export default function Welcome() {
  return (
    <section className="welcome">
      <Logoform src="./images/Component 1.png" />
      <H2 text="Welcome!" />
      <p>
        Discover manga, manhua and manhwa, track your progress, have fun, read
        manga.
      </p>
    </section>
  );
}
