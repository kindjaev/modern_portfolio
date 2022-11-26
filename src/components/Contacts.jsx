import React from 'react'
import './contacts.css'
import {AiOutlineMail} from "react-icons/ai"
import {BsMessenger} from "react-icons/bs"
import {SiWhatsapp} from "react-icons/si"
import validator from "validator"
import {useRef} from "react"
import emailjs from "emailjs-com"

function Contacts() {
  const data = [
    {icon: <AiOutlineMail />, name: "Email", contData: "kindjaev080592@gmail.com", link: "kindjaev080592@gmail.com"},
    {icon: <BsMessenger />, name: "Messenger", contData: "kindjaev", link: "kindjaev"},
    {icon: <SiWhatsapp />, name: "WhatsApp", contData: "+66651031397", link: "+66651031397"},
  ]

  // function isValidEmail(email) {
  //   return /\S+@\S+\.\S+/.test(email);
  // }
// ==========  VALIDATOR ==========
  function validateLink(link){
    let address 
    if(validator.isEmail(link)){
      return address = `mailto:${link}`
    }
    if(validator.isMobilePhone(link)){
      return address = `https://wa.me/${link}`
    }
    else {
      return address = `https://m.me/${link}`
    }
  }
// =========== SEND MESSAGE TO YOUR EMAIL ===========
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_u2v90js', 'template_prpgqem', form.current, 'fVIAnskiL0Y-RTn-k')
    e.target.reset()
    }

  return (
    <section id='contacts'>
      <h2>Contacts</h2>
      <div className="container contacts_container">
        <div className="contacts_options">
          {data.map((contact, index) => 
            <div className="contact_option" key={index}>
              <div className="img">{contact.icon}</div>
              <h4>{contact.name}</h4>
              <small>{contact.contData}</small>
              <div className='link'>
                <a href={validateLink(contact.link)} target="_blank">Send a message</a>
              </div>
            </div>
          )}
        </div>
        <div className="contacts_form">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacts