import UserModel from "../Models/UserModel.js";

//get a User
export const getUser = async(req, res) => {
    const id = req.params.id

    try {
        const user = await UserModel.findById(id)
        if(user){
            const {password, ...otherdetails} = user._doc
            res.status(200).json(otherdetails)
        } else {
            res.status(404).json("No Such User exists")
        }
    } catch (error) {
        res.status(500).json({Message: error.message})
    }
}