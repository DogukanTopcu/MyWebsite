import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/home.scss";

const Home = () => {
    const navigation = useNavigate();
  return (
    <div className='home'>
        <div className='container home-content'>
            <div onClick={() => navigation("/edit-portfolio")} className='block'>
                Edit Portfolio
            </div>
            <div onClick={() => navigation("/edit-portfolio")} className='block'>
                Create Blog Post
            </div>
            <div onClick={() => navigation("/edit-portfolio")} className='block'>
                All Blog Posts
            </div>
        </div>
    </div>
  )
}

export default Home