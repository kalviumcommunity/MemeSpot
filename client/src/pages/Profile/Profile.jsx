import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import './Profile.css'
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx'
import PostSection from '../../components/PostSection/PostSection.jsx'
import InfoCard from '../../components/InfoCard/InfoCard'
import LogoSearch from '../../components/LogoSearch/LogoSearch.jsx'

const Profile = () => {
  return (
    <div className='profile'>
      <ProfileLeft/>
        <div className='profile-center'>
          <ProfileCard/>
          <PostSection/>
        </div>
        <div className='profileRight'>
          <LogoSearch/>
          <InfoCard/>
        </div>
    </div>
  )
}

export default Profile
