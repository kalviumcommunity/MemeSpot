import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    text: {
        type: String
    }, 
    chatId: {
        type: String
    },
    senderId: {
        type: String
    }
},{timestamps: true})

const MessageModel = mongoose.model('messages', messageSchema)

export default MessageModel