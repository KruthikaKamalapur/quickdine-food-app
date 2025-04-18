import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://anjankumar:AnjanAnjan@anjandb.dqevi.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}