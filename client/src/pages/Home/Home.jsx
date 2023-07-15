import React, {useState, useEffect} from 'react'
import './Home.css'
import ProfileSection from '../../components/ProfileSection/ProfileSection'
import CreateSection from '../../components/CreateSection/CreateSection'
import PostSection from '../../components/PostSection/PostSection'
import { HashLoader } from 'react-spinners'

const Home = () => {
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  
  return (
    <div>
      {
        loading ? 
        <HashLoader color={'#783937'} loading={loading} size={100} className='pageLoader'/>
        :
        <div className='homeContainer'>
          <CreateSection/>
          <PostSection/>
          <ProfileSection/>
        </div>
      }
    </div>
  )
}

export default Home