import React from 'react';
import "../styles/navbar.scss";

import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container navbar-content'>
            <div className='navbar-left'>
                <MenuIcon className='navbar-burger' />
                <img className='my-navbar-photo' src='https://picsum.photos/200/300' />
                <div>
                    <span>Doğukan</span>
                    <span> Topçu</span>
                </div>
            </div>
            <div className='navbar-right'></div>
        </div>
    </div>
  )
}

export default Navbar