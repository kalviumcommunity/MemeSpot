import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

const URI = process.env.MONGO_URI
const Connection = () => {
    mongoose.connect(URI, {
        useNewURLParser: true, 
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log('Database connection Successful')
    })
    .catch((err)=>{
        console.log('Failed to Connect to the Database', err)
    })
};

export default Connection 