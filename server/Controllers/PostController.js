import PostModel from "../Models/PostModel.js";

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