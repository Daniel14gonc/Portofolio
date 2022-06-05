import React, { useState } from "react"
import './Contact.scss'

const Contact = () => {

  const [color, setColor] = useState('#025373')

  const handleEnter = () => {
    setColor('#021F59')
  }

  const handleOut = () => {
    setColor('#025373')
  }

  return( 
    <div className="contact">
      <div className="mail">
        <div className="email-me" style={{color: color}}>{`<Email me>`}</div>
        <div onClick={() => window.location = 'mailto:danielgo.carrillo@gmail.com'} onMouseEnter={handleEnter} onMouseOut={handleOut} className="email">
          danielgo.carrillo@gmail.com
        </div>
      </div>
      <div className="socials">
        <a href="https://instagram.com/daniel14_gc?igshid=YmMyMTA2M2Y=" target="_blank"><div>Instagram</div></a>
        <a href="https://www.linkedin.com/in/daniel-gonzález-carrillo-b83141210/" target="_blank"><div>LinkedIn</div></a>
        <a href="https://github.com/Daniel14gonc" target="_blank"><div>GitHub</div></a>
      </div>
    </div>
  )
}

export default Contact