import UserModel from "../Models/UserModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//registerUser
export const registerUser = async(req, res) => {
    const {username} = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    req.body.password = hashedPassword
    const newUser = new UserModel(req.body)

    try {
        const oldUser = await UserModel.findOne({username})
        if(oldUser){
            return res.status(400).json({Message: "You already have an account, Try Logging In"})
        }
        const user = await newUser.save()
        const token = jwt.sign({
            username: user.username, id: user._id
        }, process.env.JWT_KEY, {expiresIn: "1h"})

        res.status(200).json({user, token})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

//Login user 
export const loginUser = async(req, res) => {
    console.log(req.body)
    const {username, password} = req.body
    
    try {
        const user = await UserModel.findOne({username: username})    

        if(user){
            const validate = await bcrypt.compare(password, user.password)
            if(!validate){
                res.status(400).json({Message: "Wrong Password!"})
            }
            else{
                const token = jwt.sign({
                    username: user.username, 
                    id: user._id
                }, process.env.JWT_KEY, {expiresIn: '1h'})
                res.status(200).json({user, token})
            }
        } else {
            res.status(404).json("User Doesn't exists")
        }
    } catch (error) {
            res.status(401).json({Message: error.message})
    }
}