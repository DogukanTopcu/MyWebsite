import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Layout = () => {

  const turnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  // window.addEventListener("scroll", () => {
  //   setScroll(window.scrollY)
  // });
  
  return (
    <div>
        <Navbar />

        <div className='outlet'>
            <Outlet />
        </div>

        <Footer />
    </div>
  )
}

export default Layout