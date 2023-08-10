import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import Connection from './Connection/Connection.js'
import AuthRoutes from './Routes/AuthRoute.js'
import UserRoutes from './Routes/UserRoute.js'
import PostRoutes from './Routes/PostRoute.js'
// import ChatRoutes from './Routes/ChatRoute.js'
import cors from 'cors'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

app.listen(port, ()=>{
    console.log(`Server: Running on port ${port}`)
}) 

Connection()

app.use('/auth/', AuthRoutes)
app.use('/users/', UserRoutes)
app.use('/post/', PostRoutes)
// app.use('/chat', ChatRoutes)
