import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/dmytro-kindzhaiev-723932257/"  target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/kindjaev"  target="_blank"><BsGithub /></a>
        <a href="https://www.instagram.com/ddony_d/"  target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials