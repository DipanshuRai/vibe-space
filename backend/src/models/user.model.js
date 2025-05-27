import mongoose from "mongoose";

const userSchema=new mongoose.Schema(
    {
        email:{
            type: String,
            required: true,
            unique: true,
        },
        fullname:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
            minlength: 6,
        },
        profilePic: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true
    }
);

const User=mongoose.model("User", userSchema); // mongoose will make it as "users" in database

export default User;