import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDb from "./db/connectToMongoDb.js"
import messageRoutes from "./routes/message.routes.js"

const app=express();
const PORT=process.env.PORT || 5000;
dotenv.config();

app.use(express.json());
app.use(cookieParser());

// app.get('/',(req,res)=>{
//     res.send("Home Page");
// })

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`app is running on port ${PORT}`)});