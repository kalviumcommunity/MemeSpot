import mongoose from "mongoose";
import PostModel from "../Models/PostModel.js";
import UserModel from "../Models/UserModel.js";

//Create a New Post
export const createPost = async(req, res) => {
    const newPost = new PostModel(req.body)

    try {
        await newPost.save()
        res.status(200).json("Post Created !")
    } catch (error) {
        res.status(500).json({Message: error.message})
    }
}

//Get a Post 
export const getPost = async(req, res) => {
    const id = req.params.id

    try {
        const post = await PostModel.findById(id)
        res.status(200).json(getPost)
    } catch (error) {
        res.status(500).json({Message: error.message})
    }
    
}

//Update a Post 
export const updatePost = async(req, res) => {
    const postId = req.params.id

    const {userId} = req.body

    try {
        const post = await PostModel.findById(postId)
        if(post.userId === userId){
            await post.updateOne( { $set: req.body } )
            res.status(200).json("Post Updated !")
        } else {
            res.status(403).json("Action Forbidden !")
        }
    } catch (error) {
        res.status(500).json({Message: error.message})
    }
}

//Delete a Post 
export const deletePost = async(req, res) => {
    const id = req.params.id
    const {userId} = req.body

    try {
        const post = await PostModel.findById(id)
        if(post.userId === userId){
            await post.deleteOne()
            res.status(200).json("Post deleted !")
        } else {
            res.status(403).json("Action Forbidden")
        }

    } catch (error) {
        res.status(500).error({Message: error.message})
    }
}

//Like/Dislike a Post 
export const likePost = async(req, res) => {
    const id = req.params.id
    const {userId} = req.body

    try {
        const post = await PostModel.findById(id)

        if(!post.likes.includes(userId)){
            await post.likes.push(userId)
            await post.save()
            res.status(200).json("Post Liked !")
        } else {
            await post.likes.pull(userId)
            await post.save()
            res.status(200).json("Post Disliked !")
        }
    } catch (error) {
        res.status(500).json({Message: error.message})
    }
}

//getTimelinePost Request
export const getTimelinePost = async(req, res) => {
    const userId = req.params.id

    try {
        const currentUserPosts = await PostModel.find({userId: userId})
        const followingPosts = await UserModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(userId)
                } 
            },
            {
                $lookup: {
                    from: 'posts',
                    localField: "following",
                    foreignField: "userId",
                    as: "followingPosts"
                }
            }, 
            {
                $project: {
                    followingPosts: 1,
                    _id: 0
                }
            }
        ])
        res
            .status(200)
            .json(currentUserPosts.concat(...followingPosts[0].followingPosts)
            .sort((a,b)=>{
                return b.createdAt - a.createdAt
            })
            )
    } catch (error) {
        res.status(500).json({Message: error.message})
    }
}
