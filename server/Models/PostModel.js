import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    userId: {
        type: String, 
        required: true
    }, 
    img: String, 
    likes: [],
    description: String
}, {timestamps: true})

const PostModel = mongoose.model('posts', postSchema)
export default PostModel
