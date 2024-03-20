import mongoose from "mongoose";

const connectToMongoDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connect to mongodb");
    } catch (error) {
        console.log("Error ",error.message);
    }
   
}
export default connectToMongoDb;