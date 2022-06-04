import React, { useEffect, useRef, useState } from "react"
import SkillList from "./Skill_list"
import './Skills.scss'

const Skills = () => {
  const contRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [skills, setSkills] = useState(innerWidth > 400 ? false : true)

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  }

  const callbackFunction = (entries, observer) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  const visibleHandler = () => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (contRef.current) observer.observe(contRef.current)
  }

  const handleEnter = () => {
    if (innerWidth > 400) {
      document.querySelector('.one').style.visibility = 'hidden'
      setSkills(true)
    }
  }

  const handleLeave = () => {
    if (innerWidth > 500) {
      document.querySelector('.one').style.visibility = 'visible'
      setSkills(false)
    }
  }

  useEffect(() => {
    visibleHandler()
  })

  console.log(innerWidth)

  return (
    <div ref={contRef} className="Skills">
      { 
        isVisible &&
        <>
          <div className="design">
          <div className="cont-design">
            {
              innerWidth >= 500 && 
              <div className="hover-skills one">{'<Hover me>'}</div>
            }
            <div 
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className="title-skills"
            >
                  My skills
            </div>
            {
              skills ? <SkillList /> : 
              <p className="tone">
                I am also a developer with experience in frontend and backend.
                Also, I am a designer and UX.
              </p>
            }
          </div>
        </div>
        </>
      }
  </div>
  )
}

export default Skills