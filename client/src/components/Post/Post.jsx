import React from 'react'
import './Post.css'
import Comment from '../../images/comment.png'
import Share from '../../images/share.png'
import Heart from '../../images/notlike.png'
import NotLike from '../../images/notlike.png'

const Post = ({data}) => {
  return (
    <div className="Post">
        <img src={data.img} alt="UsersContent" />


        <div className="postReact">
            <img src={data.liked?Heart: NotLike} alt="Heart Icon" />wr
            <img src={Comment} alt="Comment Icon" />
            <img src={Share} alt="Share Icon" />
        </div>


        <span style={{color: "black", fontSize: '12px'}}>{data.likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post