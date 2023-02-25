import React from "react";
import "./header.css";

function NavBar(props) {
  return (
    <div className="navbar">
      <section className="menuhamburguesa">
        <img src="/images/Menu (1).png" alt="menu" />
      </section>
      <section className="logo">
        <img src="/images/Logo(1) 3.png" alt="logo" />
      </section>
    </div>
  );
}

export default NavBar;
