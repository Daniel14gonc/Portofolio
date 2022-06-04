import React, { useEffect, useRef, useState } from "react"
import './About.scss'
import daniel from '../assets/images/daniel.png'
import NY from '../assets/images/NY.png'
import football from '../assets/images/football.png'
import charlie from '../assets/images/charlie.png'
import Description from "./Description"

const About = () => {
  const images = [daniel, NY, football, charlie]
  const [image, setImage] = useState(daniel)
  const current = useRef(1)
  const timer = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const contRef = useRef(null)
  const firstText = `I am a Computer Science Engineering student at Universidad del Valle from Guatemala.`
  const secondText = `As you may have seen up there, I like many things and I am very passionate about
                      every single one of them. I am always looking forward to learn
                      new stuff. I really like meeting new people and getting out of my comfort zone.
                      My strengths are innovation and creativity.`
  const [change, setChange] = useState([{title: firstText, desc: secondText}])

  // Function that allows intersection observer
  const callbackFunction = (entries, observer) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  }

  const visibleHandler = () => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (contRef.current) observer.observe(contRef.current)
  }

  useEffect(() => {
    visibleHandler()
  }, [contRef, options])
  

  const start = () => {
    timer.current = setInterval(() => {
      setImage(images[current.current])
      current.current = (current.current + 1) % images.length
    }, 300)
  }

  const stop = () => {
    current.current = 0
    setImage(images[0])
    clearInterval(timer.current)
  }

  return (
    <div style={{flexDirection: `${innerWidth > 500 ? 'row' : 'column'}`}} ref={contRef} id="About" className="About">
      {
        isVisible &&
        <>
          {
            innerWidth > 500 ?
            <>
              <div className="first-about" >
                <div className="me anim1">{firstText}</div>
                {
                  change.map((e) => <Description text={e} />)
                }
              </div>
              <div className="second-about">
                {
                  innerWidth > 500 && 
                  <div className="hover">{'<Hover me>'}</div>
                }
                <div onMouseEnter={start} onMouseLeave={stop} className="image" style={{backgroundImage: `url(${image})`}} />
              </div>
            </>
            :
            <>
              <div className="second-about">
                {
                  innerWidth > 500 && 
                  <div className="hover">{'<Hover me>'}</div>
                }
                <div onMouseEnter={start} onMouseLeave={stop} className="image" style={{backgroundImage: `url(${image})`}}></div>
              </div>
              <div className="first-about" >
                <div className="me anim1" style={{fontSize: `${innerWidth > 500 ? '3rem' : '1.5rem'}`}}>{firstText}</div>
                {
                  change.map((e) => <Description text={e} />)
                }
              </div>
            </>
          }
          
        </>
      }
    </div>
  )
}

export default About