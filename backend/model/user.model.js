import mongoose from "mongoose";

const {Schema,model}=mongoose;

const userSchema=new Schema({
    fullname:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
          minlength:5,
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePic:{
        type:String,
        default:"",
    }
},{timestamps:true})

const user=model("User",userSchema);

export default user;