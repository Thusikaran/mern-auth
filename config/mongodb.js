import mongoose from "mongoose";

const connectDB = () =>{
   mongoose.connect(process.env.MONGODB_URL).then((con)=>{
    console.log('MongoDB connected ')
   })
};

export default connectDB;