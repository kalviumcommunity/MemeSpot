import React from 'react'
import './PostSection.css'
import Meme from '../../images/Meme.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DP from '../../images/ProfilePhotojpg.jpg'

const PostSection = () => {
  return (
    <div className='postSection'>
        <div className='postImageSection'>
            <img src={Meme} alt="Meme"/>
        </div>
        <div className="icons">
            <FavoriteBorderIcon sx={{
                fontSize: 40
                }
            }/>
            <ChatBubbleOutlineIcon sx={{
                fontSize: 40
                }
            }/>
            <ShareIcon sx={{
                fontSize: 40
                }
            }/>
            <MonetizationOnIcon sx={{
                fontSize: 40
                }
            }/>
        </div>
        <div className='UserProfile'>
            <img src={DP} alt="UserDp" />
            <h3>Mrs.Johnny</h3>
        </div>
        <div className='commentSection'>

        </div>
    </div>
  )
}

export default PostSection