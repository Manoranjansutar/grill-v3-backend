import mongoose from "mongoose";
import 'dotenv/config'

export const connectDB = async () =>{
    await mongoose.connect('').then(()=>{
        console.log('DB connected!!!')
    })
}