import UserModel from "../Models/UserModel.js";
import bcrypt from 'bcrypt'

//registerUser
export const registerUser = async(req, res) => {
    const {
        username, 
        password, 
        firstName, 
        lastName
    } = req.body

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new UserModel({
        username, 
        password: hashedPassword, 
        firstName, 
        lastName
    })

    try {
        await newUser.save()
        res.status(200).json(newUser)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

//Login user 
export const loginUser = async(req, res) => {
    const {username, password} = req.body
    
    try {
        const user = await UserModel.findOne({username: username})    

        if(user){
            const validate = await bcrypt.compare(password, user.password)
            validate ? res.status(200).json(user) : res.status(400).json("Wrong Password")
        } else {
            res.status(404).json("User Doesn't exists")
        }
    } catch (error) {
            res.status(404).json("User Doesn't exists")
    }
}