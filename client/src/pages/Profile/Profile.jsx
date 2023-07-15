import React, {useState, useEffect} from 'react'
import './Profile.css'
import InfoCard from '../../components/InfoCard/InfoCard'
import LogoSearch from '../../components/LogoSearch/LogoSearch.jsx'
import PostShare from '../../components/PostShare/PostShare'
import FollowerSection from '../../components/FollowerSection/FollowerSection'
import MainProfileCard from '../../components/MainProfileCard/MainProfileCard'
import { HashLoader } from 'react-spinners'

const Profile = () => {
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])

  return (
    <>
    {
      loading ?
      <HashLoader color={'#783937'} loading={loading} size={100} className='pageLoader'/>
      : 
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
    }
  </>
  )
  }

export default Profile
