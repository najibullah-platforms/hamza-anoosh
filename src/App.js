import React from 'react'
import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components'
import './App.scss'
import './style.css'

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </div>

      <div className="whatsapp-btn-container">
        <a 
          className="whatsapp-btn" 
          href="https://wa.me/91999999999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <span>Contact Us</span>
      </div>
    </>
  )
}

export default App