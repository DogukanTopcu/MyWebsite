import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <div>
        <Navbar />

        <div className='outlet'>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout