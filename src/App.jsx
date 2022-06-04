import React, { useEffect, useState } from 'react'
import Initial from '../components/Initial'
import Portofolio from '../components/Portofolio'
import NavBar from '../components/NavBar'
import About from '../components/About'

import './App.scss'


const App = () => {

  const [visible, setVisible] = useState(true)

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      const cursor = document.querySelector('.cursor')
      cursor.style.left = e.x + 'px'
      cursor.style.top = e.y + 'px'
   })
  }, [])

  return (
    <div className="main">
      <div className='cursor' style={{visibility: `${visible ? 'visible' : 'hidden'}`}} />
      <NavBar mouse={setVisible}/>
      <Initial mouse={setVisible}/>
      <Portofolio />
    </div>
  )
}

export default App
