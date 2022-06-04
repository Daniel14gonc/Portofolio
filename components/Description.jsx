import React from "react"

const Description = ({ text }) => (
  <>
    
    <div className="description anim2" style={{fontSize: `${innerWidth > 500 ? '1.5rem' : '1rem'}`}}>{text.desc}</div>
  </>
)

export default Description