import React from 'react'
import './MainProfileCard.css'
import coverPhoto from '../../images/Crushed Paper.jpg'
import profilePhoto from '../../images/ProfilePhotojpg.jpg'

const MainProfileCard = () => {
  return (
    <div className='profileCard'>
        <div className="profileImages">
            <img src={coverPhoto} alt="coverPhoto" />
            <img src={profilePhoto} alt="profilePhoto" />
        </div>
        <div className="profileNames">
            <span>Mrs.Johnny</span>
            <span>MemeCreator</span>
        </div>
        <div className="followStatus">
            <hr />
            <div>
                <div className='follow'>
                    <span>2.5M</span>
                    <span>Followers</span>
                </div>
                <div className='verticalLine'></div>
                <div className='follow'>
                    <span>69</span>
                    <span>Following</span>
                </div>
            </div>
            <hr />
        </div>
        <span>
            My Profile
        </span>
    </div>
  )
}

export default MainProfileCard
