import React from 'react';
import "../../styles/sidebar.scss";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-close'>x</div>
        <div className='sidebar-content'>
            <div className='sidebar-top'>
                <img className='my-sidebar-photo' src='https://picsum.photos/200/300' />
                <h1>Doğukan Topçu</h1>
            </div>
            <div className='sidebar-main-links'>
                <h2>Portfolio</h2>
                <h2>Blogs</h2>
                <h2>Discord</h2>
            </div>
            <div className='sidebar-line'/>
            <div className='sidebar-page-links'>
                <h2>About Me</h2>
                <h2>About Me</h2>
            </div>
        </div>
        <div className='sidebar-bottom'></div>
    </div>
  )
}

export default Sidebar