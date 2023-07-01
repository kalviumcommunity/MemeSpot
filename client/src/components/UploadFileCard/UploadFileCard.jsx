import React from 'react'
import coverPhoto from '../../images/Crushed Paper.jpg'
import profilePhoto from '../../images/ProfilePhotojpg.jpg'
import './UploadFileCard.css'

const UploadFileCard = () => {
  return (
    <div className='uploadFileCard'>
        <div className='imageSection'>
            <img src={coverPhoto} alt="coverPhoto" />
            <img src={profilePhoto} alt="profilePhoto" />
        </div>
        <div className="uploadFileTitle">
            <span>Mrs.Johnny</span>
            <span>MemeCreator</span>
        </div>
        <input type="text" placeholder="What's Happening ?" className='createBar'/>
        <div className='uploadButtons'>
            <button>Photos</button>
            <button>Videos</button>
        </div>
        <button className='shareButton'>Share</button>
    </div>
  )
}

export default UploadFileCard