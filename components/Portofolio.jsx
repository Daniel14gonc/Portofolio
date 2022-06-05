import React, { useRef } from "react"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import './Portofolio.scss'

const Portofolio = () => {

  useRef(() => {

  }, [])

  return (
    <div id="port" className="portofolio">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Portofolio