import React from 'react'
import './Home.css'
import ProfileSection from '../../components/ProfileSection/ProfileSection'
import CreateSection from '../../components/CreateSection/CreateSection'
import PostSection from '../../components/PostSection/PostSection'

const Home = () => {
  return (
    <div className='homeContainer'>
        <CreateSection/>
        <PostSection/>
        <ProfileSection/>
    </div>
  )
}

export default Home