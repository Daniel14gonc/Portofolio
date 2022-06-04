import React from "react"
import './Item.scss'

const Item = ({ text }) => {
  const size = innerWidth > 400 ? '1rem' : '0.8rem'
  return (
    <div className="item" style={{fontSize: size}}>{text}</div>
  )
}

export default Item