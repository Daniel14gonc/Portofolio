import React from "react"
import './NavBar.scss'

const NavBar = ({ mouse }) => {

  const handleClick = (view) => {
    document.querySelector(view).scrollIntoView()
  }

  return (
    <div className="NavBar">
      <div className="first-nav">
        <h1 onClick={() => handleClick('.About')} style={{fontSize : `${innerWidth > 400 ? '23px' : '15px'}`}}>About me</h1>
        <h1 onClick={() => handleClick('.Skills')} style={{fontSize : `${innerWidth > 400 ? '23px' : '15px'}`}}>Skills</h1>
        <h1 onClick={() => handleClick('.slider')} style={{fontSize : `${innerWidth > 400 ? '23px' : '15px'}`}}>Projects</h1>
        <h1 onClick={() => handleClick('.Skills')} style={{fontSize : `${innerWidth > 400 ? '23px' : '15px'}`}}>Contact me</h1>
      </div>
    </div>
  )
}

export default NavBar
