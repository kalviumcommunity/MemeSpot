import React from 'react'
import './CreateSection.css'
import FollowersCard from '../FollowersCard/FollowersCard'
import UploadFileCard from '../UploadFileCard/UploadFileCard'

const CreateSection = () => {
  return (
    <div className='createSection'>   
        <UploadFileCard/> 
        <FollowersCard/>
    </div>
  )
}

export default CreateSection