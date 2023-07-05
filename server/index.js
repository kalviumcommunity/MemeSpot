import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))

app.listen(port, ()=>{
    console.log(`Server: Running on port ${port}`)
})