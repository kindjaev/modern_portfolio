import "./header.css"
import React from 'react'
import CV from "../assets/frontend_cv.pdf"
import ME from "../assets/dony_ukr.jpg"
import HeaderSocials from './HeaderSocials'
import {BsFillArrowDownSquareFill} from "react-icons/bs"



function Header() {
  return (
    <header>
      <div className="container container-header">
        <h5>Hello I'm</h5>
        <h1>Dmytro Kindzhaiev</h1>
        <h5 className="text-light">Front-End Developer</h5>

        <div className="cta">
          <a className="btn" href={CV} download>Download CV</a>
          <a className="btn btn-primary" href="#contacts">Contacts</a>
        </div>
         
        <HeaderSocials />

        <a href="#contacts" className="scroll_down"><BsFillArrowDownSquareFill /></a>

        <div className="me">
          <img src={ME} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header