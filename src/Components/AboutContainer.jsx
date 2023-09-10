import React from 'react'

import '../styles/aboutSlide.css'
function AboutContainer() {
  return (
    <div className='ctnAbout'>
        <img src='images/image-about-dark.jpg' alt='imageAbout'/>
        <div className="ctnAboutInfo">
          <h1 className='title'>About our furniture </h1>
          <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>
        <img src='images/image-about-light.jpg' alt='imageAbout'/>
    </div>
  )
}

export default AboutContainer