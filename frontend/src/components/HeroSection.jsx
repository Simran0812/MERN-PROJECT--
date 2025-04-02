import React from 'react'
import { Link } from 'react-scroll'

const HeroSection = () => {
  return (
    <section className='hero'>
      <img src="/restaurant.jpg" alt="restaurant"/>
      <div className="item">
        <h3>Your Table Awaits</h3>
        <div>
          <h1>Making Every Bite a Dream Come True</h1>
          <p>Great Experiences Begin with Grand Visions and Thoughtful Details</p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
          BOOK NOW 
           </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection