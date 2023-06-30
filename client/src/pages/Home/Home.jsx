import React from 'react'
import './Home.css'
import ProfileSection from '../../components/ProfileSection/ProfileSection'

const Home = () => {
  return (
    <div className='homeContainer'>
        <div className='sections'><h1>Create</h1></div>
        <div className='sections'><h1>Post</h1></div>
        <ProfileSection/>
    </div>
  )
}

export default Home