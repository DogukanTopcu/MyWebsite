import React from 'react'
import AboutMe from '../components/Portfolio/AboutMe'
import Banner from '../components/Portfolio/Banner'
import Sidebar from '../components/Portfolio/Sidebar'

const Portfolio = () => {
  
  const scrollTo = (element) => {
    console.log(element);
    try {
      let elementPos = document.querySelector(element).offsetTop;
      window.scrollTo({
          top: elementPos,
          behavior: 'smooth'
      });
    } catch (error) {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      })
    }
  }

  return (
    <div className='portfolio'>
      <div style={{ display: "none", }} className='sidebar-menu'>
        <Sidebar/>
      </div>
      <div className='bannerSection' id="banner">
        <Banner scrollTo={scrollTo} />
      </div>
      <div className='aboutmeSection' id='about'>
        <AboutMe />
      </div>
    </div>
  )
}

export default Portfolio