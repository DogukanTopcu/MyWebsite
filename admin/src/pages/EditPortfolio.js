import React, { useState } from 'react';
import "../styles/editPortfolio.scss";

import FileBase from "react-file-base64";

const EditPortfolio = () => {
    const [editPortfolio, setEditPortfolio] = useState({
        banner_title: "",
        banner_img: "",
        aboutMe: "",
    })
  return (
    <div className='editPortfolio'>
        <div className='container editPortfolio-content'>
            <div className='edit-form'>
                <h2>Banner</h2>
                <label>Banner Title</label>
                <input className='banner-title-input' type="text" value={editPortfolio.banner_title} onChange={e => setEditPortfolio({...editPortfolio, banner_title: e.target.value})} />

                <label>Banner Image</label>
                <FileBase 
                  type="file"
                  multiple={false}
                  onDone={({base64}) => setEditPortfolio({ ...editPortfolio, banner_img: base64 })}
                />

                <h2>About Me</h2>
                <textarea className='aboutMe-input' type="text" value={editPortfolio.aboutMe} onChange={e => setEditPortfolio({...editPortfolio, aboutMe: e.target.value})} />
            
            </div>
        </div>
    </div>
  )
}

export default EditPortfolio