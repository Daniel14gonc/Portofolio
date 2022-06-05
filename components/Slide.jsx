import React, { useState, useRef } from "react"
import './Slide.scss'

const Slide = ( {title, desc, image, link} ) => {

  const [hover, setHover] = useState(false)
  const text = useRef(`<Hover me>`)
  const ref = useRef(null)

  const handleHover = () => {
    setHover(true)
    text.current = `<Click me>`
  }

  return (
    <div className="slide">
      {
        innerWidth > 500 ?
        <>
          <p className="hover-pr">{text.current}</p>
          <a href={link} target="_blank"><p className="go" onMouseEnter={handleHover}>{title}</p></a>
          {
            hover &&
            <div className="project-cont">
              <div className="image-holder" style={{backgroundImage: `url(${image})`}}/>
              <div className="project-desc">
                {desc}
              </div>
            </div>
          }
        </>
        :
        <>
          <p className="hover-pr">{`<Click me>`}</p>
          <a href={link} target="_blank"><p className="go" onMouseEnter={handleHover}>{title}</p></a>
          <div className="project-cont">
            <div className="image-holder" style={{backgroundImage: `url(${image})`}}/>
            <div className="project-desc">
              {desc}
            </div>
          </div>
        </>
      }
      
    </div>
  )
}

export default Slide