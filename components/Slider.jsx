import React, { useEffect, useRef, useState } from "react"
import Slide from "./Slide"
import SpecialSlide from "./SpecialSlide"
import './Slider.scss'
import Communic from '../assets/images/CommunicAID.jpg'
import Louvre from '../assets/images/Louvre.jpg'
import Memory from '../assets/images/Memoria.jpg'
import HCI from '../assets/images/HCI.jpg'
import Batman from '../assets/images/Batman.jpg'
import Streaming from '../assets/images/Streaming.jpg'
import Instagram from '../assets/images/Instagram.jpg'

const Slider = () => {

  const [left, setLeft] = useState('hidden')
  const [right, setRight] = useState('visible')  
  const [position, setPosition] = useState(0)
  const counter = useRef(0)
  const ref = useRef(null)
  const width = useRef(0)

  const slides = [
    {
      title: 'CommunicAID', 
      description: 'I built this tool for the Accessibility + AI Challenge Hackathon from Microsfot Latin America. The aim of the project  is to shorten the gap for people with hearing disabilities who want to study, increasing inclusivity.',
      image: Communic,
      link: 'https://devpost.com/software/communicaid-2i9c8l?ref_content=my-projects-tab&ref_feature=my_projects'
    },
    {
      title: 'Louvre Pixel Perfect',
      description: "I made a Pixel Perfect copy of Louvre Museum's website. This was a challenging project because of the position of elements and the animations involved. Furthermore, I made it with Server Side Rendering, without any framework like NextJS, just express and Hydrate. I uploaded the project to my own AWS virtual machine and used NGINX, a reverse proxy tool.",
      image: Louvre,
      link: 'https://proyecto.danielgcarrillo.xyz'
    },
    
    {
      title: 'Instagram Redesign',
      description: "As my first UX project, I redesigned Instagram. I identified different issues with the app through user research. The redesign was intended to simplify and improve user experience.",
      image: Instagram,
      link: 'https://xd.adobe.com/view/63420294-e4f1-4262-89b6-d5cc33b5f721-3611/'
    },
    {
      title: 'Order managment system',
      description: "I created an order management system for a goods provider who needed to modernize its system. I did research of the needs of the users and made an app on top of that.",
      image: HCI,
      link: 'https://www.figma.com/proto/zbUBNUvfknV0uCFLiGNs4W/HCI?page-id=0%3A1&node-id=5%3A9&viewport=397%2C221%2C0.16&scaling=min-zoom&starting-point-node-id=31%3A150'
    },
    {
      title: 'Batman Single Div',
      description: "I drew Batman CSS only with a single div. It was challenging because I did not know how to use CSS attributes and classes, but it ended up being pretty cool.",
      image: Batman,
      link: 'https://codepen.io/Daniel14_gc/pen/dyZNZWa'
    }
  ]

  // const width = document.querySelector('.dynamic').offsetWidth

  const handleRight = () => {
    if (counter.current + 1 < slides.length) {
      setPosition(position + width.current)
      setLeft('visible')
      counter.current += 1
    } else if (counter.current + 1 === slides.length) {
      setPosition(position + width.current)
      setLeft('visible')
      setRight('hidden')
      counter.current += 1
    }
  }

  const handleLeft = () => {
    console.log(width)
    if (counter.current - 1 > 0) {
      setPosition(position - width.current)
      setRight('visible')
      counter.current -= 1
    } else if (counter.current - 1 === 0) {
      setPosition(position - width.current)
      setRight('visible')
      setLeft('hidden')
      counter.current -= 1
    }
  }

  useEffect(() => {
    const elementW = document.querySelector('.left').offsetWidth
    width.current = innerWidth
  }, [])

  return (
    <div className="slider">
      <div className="left">
        <div onClick={handleLeft} className="arrow-left" style={{visibility: left}}></div>
      </div>
      <div className="divisor" />
      <div ref={ref} className="dynamic">
        <div style={{transform: `translate(${-position}px, 0px)`}}>
          <SpecialSlide />
          {
            slides.map((e) => <Slide width={width} title={e.title} desc={e.description} image={e.image} link={e.link} />)
          }
        </div>
      </div>
      <div className="right">
        <div onClick={handleRight} className="arrow-right" style={{visibility: right}}></div>
      </div>
    </div>
  )
}

export default Slider