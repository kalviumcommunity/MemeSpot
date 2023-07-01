import React from 'react'
import './Home.css'
import ProfileSection from '../../components/ProfileSection/ProfileSection'
import CreateSection from '../../components/CreateSection/CreateSection'

const Home = () => {
  return (
    <div className='homeContainer'>
        <CreateSection/>
        <div className='sections'><h1>Post</h1></div>
        <ProfileSection/>
    </div>
  )
}

export default Home