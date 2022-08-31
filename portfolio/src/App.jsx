import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import School from '../components/School'
import Footer from '../components/Footer'
import data from "../data"

function App() {

  const skills = data.map(datas => 
    <Skills 
    nameImage = {datas.image}
    alt = {datas.alt}
    skillName = {datas.skillName}
    description = {datas.description}

    /> )

  return (
    <div className="App">
      <Header />
      <Main />
      <Projects />
      <div className="skill-section" id="Stack">
        <h1 className="heading">Compétences</h1>
        <div className="skills-container">{skills}</div>
      </div>
      <School />
      <Footer />
    </div>
  )
}

export default App
