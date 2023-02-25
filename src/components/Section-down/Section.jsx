import React from "react";
import "./section.css";

export default function Section() {
  return (
    <section className="sectionDown">
      <div className="rectangle">
        <div className="img1">
          <img
            src="/images/29eba9990120382f731a1ae7dbe1a54d 1.png"
            alt="img1"
          />
        </div>
        <div className="img2">
          <img src="/images/image 3.png" alt="img2" />
        </div>
        <div className="text3">
          <h2 id="h2sectiondown">My Hero Academy</h2>
          <p id="manga">Manga</p>
          <p id="pInfo">
            In a world in which most of the population is born with a Gift, a
            different extraordinary ability in each one, it didn't take long for
            both villains and heroes to appear ready to stop them.
          </p>
        </div>
      </div>
    </section>
  );
}
