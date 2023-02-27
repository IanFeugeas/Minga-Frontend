import React from 'react'
import "./hero.css"
import Header from "../Header/Header.jsx"
import Sectionup from "../Sectionup/Sectionup.jsx"
import Section from "../Section-down/Section.jsx"

export default function Hero() {
  return (
    <div>
        <div className="back-image">
            <Header/>
            <Sectionup/>
        </div>
        <Section/>
    </div>
  )
}

