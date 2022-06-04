import React, { useEffect } from "react"
import './Canvas.scss'

const handleCanvas = () => {
  let circleArray = []
  const initCanvas = () => {
    circleArray = []
  }

  

  const colorArray = [
    '355, 85, 80', 
    '9, 80, 100',
    '343, 81, 45'
  ]
  const canvas = document.querySelector('.canvas')
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth
  const ctx = canvas.getContext('2d')
  if (innerWidth <= 500) {
    window.interval = setInterval(() => {
      mouse.x = Math.floor(Math.random() * innerWidth)
      mouse.y = Math.floor(Math.random() * innerHeight)
      drawCircles()
    }, 100)
  } else {
    window.clearInterval(window.interval)
  }

  
  window.addEventListener('resize', () => {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    initCanvas()
  })

  let frame = 0
  const animate = () => {
    requestAnimationFrame(animate)
    frame += 1
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update()
    }
  }

  const mouse = {
    x: undefined,
    y: undefined
  }

  window.addEventListener('mousemove', (e) => {
    mouse.x = Math.floor(Math.random() * innerWidth)
    mouse.y = (Math.random() * innerHeight)
    drawCircles()
  })

  window.addEventListener('touchmove', (e) => {
    const touch = e.touches[0]
    mouse.x = touch.clientX
    mouse.y = touch.clientY
    drawCircles()
  })

  function circle(x, y, radius, vx, vy, rgb, opacity, birth, life) {
    this.x = x
    this.y = y
    this.radius = radius
    this.minRadius = radius
    this.vx = vx
    this.vy = vy
    this.birth = birth
    this.life = life
    this.opacity = opacity

    this.draw = () => {
      ctx.beginPath()
      ctx.arc(this.x, this.y, 1.3, 2, false)
      ctx.fillStyle = '#E04C3E'
      ctx.fill()
    }

    this.update = () => {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) this.vx = -this.vx
      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) this.vy = -this.vy

      this.x += this.vx
      this.y += this.vy
      this.opacity = 1 - (((frame - this.birth) * 1) / this.life)

      if (frame > this.birth + this.life) {
        for (let i = 0; i< circleArray.length; i += 1){
          if (this.birth === circleArray[i].birth && this.life === circleArray[i].life) {
            circleArray.splice(i, 1)
            break;
          }
        }
      } else {
        this.draw()
      }
    }
  }
  
  const drawCircles = () => {
    for (let i =0; i < 1; i += 1) {
      let radius = Math.floor(Math.random() * 4) + 1
      let vx = (Math.random() * 2) - 1
      let vy = (Math.random() * 2) - 1
      let spawnFrame = frame
      let rgb = colorArray[Math.floor(Math.random() * colorArray.length)]
      let life = 100
      circleArray.push(new circle(mouse.x, mouse.y, radius, vx, vy, rgb, 1, spawnFrame, life))
    }
  }


  initCanvas()
  animate()
  for(let i = 0; i < 110; i += 1) {
    ((index) => {
      setTimeout(() => {
        mouse.x = 100 + index * 10
        mouse.y = 100
        drawCircles()
      }, i*10)(i)
    })
  }
}

const Canvas = () => {
  useEffect(() => {
    handleCanvas()
  }, [])
  return (
    <canvas className="canvas" />
  )
}

export default Canvas