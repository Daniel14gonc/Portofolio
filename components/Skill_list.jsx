import React, { useRef, useState } from "react"
import Item from "./Item"
import './Skill_list.scss'

const SkillList = () => {
  const skills = ['Unity', 'C++', 'Java', 'Nginx', 'HTML', 'CSS',
                  'Javascript', 'Figma', 'Adobe XD', 'Photoshop', 'PostgreSQL', 'Python', 'C#',
                  'Express', 'Vite', 'Design Thinking', 'AWS', 'SocketIO', 'React', 
                  'React-Native', 'Kotlin', 'Git', 'React', 'Scrum']

  return (
    <div className="list-skill">
    {
      skills.map((e) => <Item text={e}/>)
    }
    </div>
  )
}

export default SkillList