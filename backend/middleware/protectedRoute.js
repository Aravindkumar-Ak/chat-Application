import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

const protectedRoute=async(req,res,next)=>{
    try {
        const token=req.cookies.jwt;//fetch jwt token from database to validate
        if(!token){
res.status(401).json({error:"Unauthorized - No token provided"})
        }  

        const decode=jwt.verify(token,process.env.JWT_SECRET_KEY);//compare token === jwt secret key
       
        if(!decode){
            res.status(401).json({error:"unauthorized - invalid token"})
        }

        const user=await User.findById(decode.userId).select("-password");//decode.userId -->contains Users userId 
        if(!user){
            res.status(404).json({error:"No user found"})
        }

        req.user=user;
        next();

    } catch (err) {
        console.log("error in logout controller", err.message);
        res.status(500).json({ error: "internal server error"});
    }
  
}

export default protectedRoute;