import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {type: String, unique: true, lowercase: true, required: true},
        password: {type: String, required: [true, "password is required"]},
        email: {type:String, lowercase: true, required: true, unique: true}
    }, 
    {timestamps: true});

export const User = mongoose.model("User", userSchema);