import express from 'express'
import { createPost, getPost, updatePost } from '../Controllers/PostController.js'

const router = express.Router()

router.post('/create', createPost)
router.get('/getPost', getPost)
router.put('/:id', updatePost)

export default router 