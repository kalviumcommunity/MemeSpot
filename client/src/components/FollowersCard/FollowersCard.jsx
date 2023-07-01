import React from 'react'
import './FollowersCard.css'
import { Followers } from '../../Data/FollowersData'

const FollowersCard = () => {
  return (
    <div className='followerCard'>
        <h3>Who is following you ?</h3>
        {
            Followers.map((followers,id)=>{
                return(
                    <div className='follower'>
                        <div>
                            <img src={followers.img} alt="" className='followerImg' />
                            <div className="name">
                                <span>{followers.name}</span>
                                <span>@{followers.username}</span>
                            </div>
                            <button className='button followerCardButton'>
                                Follow
                            </button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default FollowersCard