import React from 'react';
import "../../styles/banner.scss";

import Me from "../../assets/images/me.jpg";

const Banner = ({ scrollTo }) => {
  return (
    <div className='banner'>
        <div className='container banner-content'>
            {/* <div className='banner-name'>D<span className='banner-name-little'>oğukan</span></div>
            <div className='banner-surname'>T<span className='banner-name-little'>opçu</span></div> */}

            <div className='banner-name'>D</div>
            <div className='banner-surname'>T</div>

            <div className='banner-left'>
                <p>Minim officia pariatur culpa duis deserunt velit pariatur veniam veniam duis.</p>
            </div>
            <div className='banner-right'>
                <img onClick={() => scrollTo("#about")} src={Me} className='banner-image' />
            </div>
        </div>
    </div>
  )
}

export default Banner