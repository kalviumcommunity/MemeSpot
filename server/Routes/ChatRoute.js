import express from 'express'
import chatController from '../Controllers/ChatController'
import userChatController from '../Controllers/UserChatController'
import findChatController from '../Controllers/FindChatController'

const router = express.Router()

router.post('/', createChat)
router.get('/:userId', userChat)
router.get('/find/:firstId/:secondId', findChat)

export default router