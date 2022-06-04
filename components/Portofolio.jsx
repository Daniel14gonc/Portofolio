import React, { useRef } from "react"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import './Portofolio.scss'

const Portofolio = () => {

  useRef(() => {

  }, [])

  return (
    <div id="port" className="portofolio">
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default Portofolio