import React from 'react'
import './ProfileSection.css'
import LogoSearch from '../LogoSearch/LogoSearch.jsx'
import ProfileCard from '../ProfileCard/ProfileCard'

const ProfileSection = () => {
  return (
    <div className='profileSection'>
        <LogoSearch/>
        <ProfileCard/>
    </div>
  )
}

export default ProfileSection