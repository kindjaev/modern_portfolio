import { useState } from 'react'
import About from './components/About'
import Contacts from './components/Contacts'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from "./components/Header"
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
// import Testimonials from './components/Testimonials'

function App() {


  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
