import express from 'express'
import { createPost, deletePost, getPost, updatePost, likePost } from '../Controllers/PostController.js'

const router = express.Router()

router.post('/create', createPost)
router.get('/getPost', getPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id/like', likePost)

export default router









