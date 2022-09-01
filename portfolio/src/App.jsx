import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Project from '../components/Projects'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import skillsData from "../skillsData"
import projectData from '../projectData'

function App() {
  // map over the data array to display the datas into the Skill component
  const skills = skillsData.map(datas => 
    <Skills 
    nameImage = {datas.image}
    alt = {datas.alt}
    skillName = {datas.skillName}
    description = {datas.description}
    key={datas.key}
    /> )

    const projects = projectData.map(project => 
      <Project 
      link = {project.link}
      image = {project.image}
      alt = {project.alt}
      title = {project.title}
      info = {project.info}
      titleColor = {project.titleColor}
      infoColor = {project.infoColor}
      />)


  return (
    <div className="App">
      <Header />
      <Main />

      <section className="project-section" id="Projects">
        <h1 className="project-heading">Quelques projets</h1>
        <div className="project-container">{projects}</div>
      </section>

      <div className="skill-section" id="Stack">
        <h1 className="heading">Compétences</h1>

        <div className="skills-container">{skills}</div>
      </div>
      <Footer />
    </div>
  )
}

export default App
