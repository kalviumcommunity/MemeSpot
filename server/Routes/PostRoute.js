import express from 'express'
import { createPost, deletePost, getPost, updatePost, likePost, getTimelinePost } from '../Controllers/PostController.js'

const router = express.Router()

router.post('/create', createPost)
router.get('/getPost', getPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id/like', likePost)
router.get('/:id/timeline', getTimelinePost)

export default router









