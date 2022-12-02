import React from 'react'
import ME from "../assets/dony_yellow.jpg"
import {FaAward} from "react-icons/fa"
import {BsFillPeopleFill} from "react-icons/bs"
import {CgWebsite} from "react-icons/cg"
import "./about.css"

function About() {
  const data = [

    {id: 0, icon: <FaAward />, title: "Experince", text: "1 year"},
    // {id: 1, icon: <BsFillPeopleFill />, title: "Clients", text: ""},
    {id: 2, icon: <CgWebsite />, title: "Projects", text: "6"}
  ]

  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            {data.map(card => 
            <div className="about_card" key={card.id}>
              <span className='about_icon'>{card.icon}</span>
              <h5>{card.title}</h5>
              <small>{card.text}</small>
            </div>
            )}
          </div>
          <p>Front-End-Developer with a passion for both personal growth and software development, curious for new knowledge, easy going to work with a team, happy to receive mentorship by a senior. Ready to apply my passion and diligence for coding to a talented team to develop quality solutions.</p>
          <div className="about_cta">
            <a href="#contacts" className="btn btn-primary">Let's talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About