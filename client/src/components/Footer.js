import React from 'react';
import "../styles/footer.scss";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container footer-content'>
            <div className='footer-top'>
                <div className='footer-top-first'>
                    <h2>Doğukan Topçu</h2>
                    <p>Full Stack Web and Game Developer</p>
                    <div className='footer-socials'>
                        <GitHubIcon className='footer-social-icon' />
                        <LinkedInIcon className='footer-social-icon' />
                        <TwitterIcon className='footer-social-icon' />
                        <YouTubeIcon className='footer-social-icon' />
                    </div>
                </div>
                <div className='footer-top-second'>
                    <h2>Sitemap</h2>
                </div>
                <div className='footer-top-third'>
                    <h2>Let's Join To My Community!</h2>
                </div>
                <div className='footer-top-fourth'>
                    <h2>Contanct Me</h2>
                </div>
            </div>

            <div className='footer-bottom'>
                <p>All rights reserved &copy; Doğukan Topçu 2022</p>
            </div>
        </div>
    </div>
  )
}

export default Footer