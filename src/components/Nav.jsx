import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {MdWorkOutline} from "react-icons/md"
import {FiMail} from "react-icons/fi"
// import {AiOutlineComment} from "react-icons/ai"
import "./nav.css"
import {useState} from "react"

function Nav() {
  const data = [
    {id: 0, act: true, href: "#", icon: <AiOutlineHome />},
    {id: 1, act: false, href: "#about", icon: <AiOutlineUser/>},
    {id: 2, act: false, href: "#portfolio", icon: <MdWorkOutline/>},
    // {id: 3, act: false, href: "#comments", icon: <AiOutlineComment/>},
    {id: 4, act: false, href: "#contacts", icon: <FiMail/>}
  ]

const [icons, setIcons] =useState(data)

const mapping = icons.map(icon => {
  return (
    <a href={icon.href} key={icon.id} 
    onClick={() => handleClick(icon.id)} 
    className={icon.act ? "active" : ""}>{icon.icon}</a>
  )
})

  function handleClick(id) {
    setIcons(prev => prev.map(icon => 
        id === icon.id ? {...icon, act: true} : {...icon, act: false}
      ))
  }
  return (
    <nav>
      {mapping}
      {/* ========= HARDCODED ========  */}
      {/* <a href="#" className={active}><AiOutlineHome /></a>
      <a href="#about" name="#about" onClick={handleClick} className={active}><AiOutlineUser /></a>
      <a href="#portfolio"><MdWorkOutline /></a>
      <a href="#contacts"><FiMail /></a>
      <a href="#comments"><AiOutlineComment /></a> */}
    </nav>
  )
}

export default Nav