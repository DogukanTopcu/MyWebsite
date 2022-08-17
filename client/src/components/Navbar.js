import React from 'react';
import "../styles/navbar.scss";

import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigation = useNavigate();
  return (
    <div className='navbar'>
        <div className='container navbar-content'>
            <div className='navbar-left'>
                {/* <MenuIcon className='navbar-burger' /> */}
                <div className="navbar-burger">
                  <div className='burger-line line1' />
                  <div className='burger-line line2' />
                  <div className='burger-line line3' />
                </div>
                <div className='navbar-fullName'>
                    Doğukan Topçu
                </div>
            </div>
            <div className='navbar-right'>
              <div className="navbar-links">
                <div onClick={() => navigation("/blogs")} className='nav-link'>Blogs</div>
                <div onClick={() => navigation("/")} className='nav-link'>Portfolio</div>
                <div className='nav-link'>Discord</div>
              </div>
                <img className='my-navbar-photo' src='https://picsum.photos/200/300' />
            </div>
        </div>
    </div>
  )
}

export default Navbar