import React, {useState, useRef} from 'react'
import './PostShare.css'
import {UilTimes} from '@iconscout/react-unicons'
import DP from '../../images/ProfilePhotojpg.jpg'

const PostShare = () => {
  const [image, setImageOpened] = useState(null)
  const imageRef = useRef()

  const handleChange = (event) => {
    if(event.target.files && event.target.files[0]){
      let img = event.target.files[0]
      setImageOpened({
        image: URL.createObjectURL(img)
      })
    }
    console.log('Working till this point')
  }

  return (
    <div className='postShare'>
      <div style={{fontSize: 20}}>
        <img src={DP} alt="profilePhoto" />
        <input type="text" placeholder="What's happening?"/>
      </div>
      <div className='shareButtons'>
        <div onClick={()=>{imageRef.current.click()}}>Photos</div>
        <div>Videos</div> 
        <button>Share</button>
        <div style={{display: 'none'}}>
          <input 
            type="text" 
            name='myImage'
            ref={imageRef}
            onChange={handleChange}/>
        </div>
      </div>
      {image && (
        <div className="previewImage">
          <UilTimes/>
        </div>
      )
      } 
    </div>
  )
}

export default PostShare
