import React from 'react';
import "../styles/discord.scss";

import discordImg from "../assets/images/discord.svg";

const Discord = () => {
  return (
    <div className='discord'>
        <div className='container discord-content'>
            <img src={discordImg} className="discordImg"/>
            <h1>You can come to my Discord Community :)</h1>
            <button className='discordJoin'>Join Us</button>
        </div>
    </div>
  )
}

export default Discord