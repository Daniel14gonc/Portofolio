import React, { useEffect, useState, useRef } from "react"
import './Initial.scss'

const Initial = ({ mouse }) => {
  const [dimensions, setDimensions] = useState({
      size: innerWidth > 500 ? '2.3rem' : '1.5rem',
      shadowText: innerWidth > 400 ? '5px 5px 0px #E68D85' : '3px 3px 0px #E68D85',
      buttonWidth: innerWidth > 400 ? '150px' : '130px',
      buttonHeight: innerWidth > 400 ? '50px' : '40px',
      textSize: innerWidth > 400 ? '18px' : '14px',
  })

  const [quality, setQuality] = useState('A dog lover') 
  const current = useRef(1)
  const terms = ['A dog lover', 'An athlete', 'A software developer', 'A science fan', 'An inveterate reader', 'A code passionate', 'A chess player']
  const clase = useRef('t1')
  
  useEffect(() => {
    document.querySelector('.App').style.width = innerWidth
    document.querySelector('.App').style.height = innerHeight

   
    setInterval(() => {
      if (clase.current === 't1') {
        setQuality(terms[current.current])
        current.current = (current.current + 1) % terms.length
        document.querySelector('.t1').style.animation = 'up2 300ms steps(50, end)'
      } else {
        document.querySelector('.t1').style.animation = 'none'
      }
      clase.current = clase.current === 't1' ? 't2' : 't1'
    }, 1000)

    window.resizeListener = window.addEventListener('resize', () => {
      document.querySelector('.App').style.width = innerWidth
      document.querySelector('.App').style.height = innerHeight
      if (innerWidth <= 500) {
        const newObject = {
          size: '1.5rem',
          shadowText: '3px 3px 0px #E68D85',
          buttonWidth: '100px',
          buttonHeight: '40px',
        }
        setDimensions(newObject)
      } else {
        const newObject = {
          size: '3rem',
          shadowText: '5px 5px 0px #E68D85',
          buttonWidth: '150px',
          buttonHeight: '50px',
        }
        setDimensions(newObject)
      }
    })
  }, [])  

  return (
    <div  className='App'>
      <div className="cont">
        <div style={{flexGrow: '0.8', display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column'}}>
          <div  className="special-text">Hi, I am Daniel Gonzalez</div>
          <div className='special-text'>
            <div style={{color: '#1F98A6'}} className='t1'>
              {quality}
            </div>
          </div>
        </div>
        
        <button onMouseEnter={() => mouse(false)} onMouseLeave={() => mouse(true)} onClick={() => document.querySelector('.About').scrollIntoView()} className="arrow-down" />
      </div>
    </div> 
  )
}

export default Initial