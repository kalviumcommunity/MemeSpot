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

// update a User
export const updateUser = async(req, res) => {
    const id = req.params.id
    const {currentUserId, currentUserAdminStatus, password} = req.body

    if(id === currentUserId || currentUserAdminStatus){
        try {
            const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true})
            res.status(200).json(user)
        } catch (error) {
            res.status(403).json({Message: error.message})
        }
    } else {
        res.status(404).json("Access Denied! you can only update your own profile.")
    }
}

//delete a User
export const deleteUser = async(req, res) => {
    const id = req.params.id

    const {currentUserId, currentUserAdminStatus} = req.body

    if(id === currentUserId || currentUserAdminStatus){
        try {
            const user = await UserModel.findByIdAndDelete(id)
            res.status(200).json("User Deleted Successfully")
        } catch (error) {
            res.status(500).json({Message: error.message})
        }
    } else {
        res.status(404).json('Access Denied ! You can only delete your own profile. ')
    }
}