import React from 'react'
import './ProfileSection.css'
import LogoSearch from '../LogoSearch/LogoSearch.jsx'
import ProfileCard from '../ProfileCard/ProfileCard'
import NavigationButton from '../NavigationButtons/NavigationButton'

const ProfileSection = () => {
  return (
    <div className='profileSection'>
        <LogoSearch/>
        <NavigationButton/>
        <ProfileCard/>
    </div>
  )
}

export default ProfileSection