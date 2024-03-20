import User from "../model/user.model";

export const getUsers=async(req,res)=>{
    try {

        const loggedInUserId=req.user._id;

        const filterUsers=await User.find({_id:{$ne:loggedInUserId}})//fetch all users from database notequal current loggedinuserId
        res.status(200).json(filterUsers);
        
    } catch (err) {
        console.log("error in logout controller", err.message);
        res.status(500).json({ error: "internal server error"});
    }
}