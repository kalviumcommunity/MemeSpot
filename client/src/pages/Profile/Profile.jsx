import React from 'react'
import './Profile.css'
import InfoCard from '../../components/InfoCard/InfoCard'
import LogoSearch from '../../components/LogoSearch/LogoSearch.jsx'
import PostShare from '../../components/PostShare/PostShare'
import FollowerSection from '../../components/FollowerSection/FollowerSection'
import MainProfileCard from '../../components/MainProfileCard/MainProfileCard'

const Profile = () => {
  return (
    <div className='profile'>
      <FollowerSection/>
        <div className='profileCenter'>
          <MainProfileCard/>
          <PostShare/>
        </div>
        <div className='profileRight'>
          <LogoSearch/>
          <InfoCard/>
        </div>
    </div>
  )
}

export default Profile
