import React from 'react'
import "./footer.css"
import {AiOutlineFacebook} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineWhatsApp} from "react-icons/ai"
function Footer() {
  return (
    <footer>
      <h2>DONY DEXON</h2>
      <div className="socials">
        <a href="https://www.facebook.com/kindjaev/"><AiOutlineFacebook /></a>
        <a href="https://www.instagram.com/ddony_d/"><AiOutlineInstagram /></a>
        <a href="https://wa.me/+66651031397"><AiOutlineWhatsApp /></a>
      </div>
    </footer>
  )
}

export default Footer