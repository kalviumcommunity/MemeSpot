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