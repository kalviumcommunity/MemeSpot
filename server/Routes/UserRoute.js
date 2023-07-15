import express from 'express'
import { deleteUser, followUser, getUser, unFollowUser, updateUser } from '../Controllers/UserController.js'

const router = express.Router()

router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/followUser', followUser)
router.put('/:id/unFollowUser', unFollowUser)

export default router