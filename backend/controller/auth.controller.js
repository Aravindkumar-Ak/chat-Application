import User from "../model/user.model.js";
import generateTokenandJwt from "../utils/generateToken.js";
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;

//use confirm password for validation purpose
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password donot match" });
    }
    if (!fullname || !username || !gender) {
        return res.status(400).json({ error: "Missing required fields" });
      }
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "user already exists" });
    }

    //Hash password here
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt)

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?${username}`;

    const newUser = new User({
      fullname,
      username,
      password:hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

if(newUser){
  //generate jwt token
  generateTokenandJwt(newUser.id,res)
  await newUser.save();
}

     res.status(201).json({
      _id: newUser.id,
      fullname: newUser.fullname,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (err) {
    console.log("error in signup controller", err.message);
    res.status(500).json({ error: "internal server error" });
  }
};




export const login = async(req, res) => {
 
 try {

  const {username,password}=req.body;
 
 const user=await User.findOne({username});

 const isPasswordCorrect=await bcrypt.compare(password,user?.password || "");

 if(!username || !isPasswordCorrect){
  res.status(400).json({error:"Invalid user crendentials"})
 }
 generateTokenandJwt(user._id,res)
  res.status(200).json({
    _id:user._id,
    fullname:user.fullname,
    username:user.username,
    profilePic:user.profilePic
  })
 } catch (err) {
  console.log("error in login controller", err.message);
  res.status(500).json({ error: "internal server error" });
 }
};

export const logout = (req, res) => {
 try {
  res.cookie("jwt","",{maxAge:0})
  res.status(200).json({message:"logout successfully"})
  
 } catch (err) {
  console.log("error in logout controller", err.message);
  res.status(500).json({ error: "internal server error" });
 }
};
