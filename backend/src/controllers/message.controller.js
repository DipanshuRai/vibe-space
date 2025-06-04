import Message from "../models/message.model.js";
import User from "../models/user.model.js"
import cloudinary from "../lib/cloudinary.js";

export const getUsers=async (req, res)=>{
    try {
        const LoggedInUser=req.user._id;
        const filteredUsers=await User.find({_id: {$ne: LoggedInUser}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUser: ", error.message);
        res.status(500).json({message: "Internal server error"});
    }
};

export const getMessages=async (req, res)=>{
    try {
        const {id:userToChatId}=req.params;
        const myId=req.user._id;

        // console.log(userToChatId);
        // console.log(myId);

        const messages=await Message.find({
            $or: [
                {senderId: myId, receiverId: userToChatId},
                {senderId: userToChatId, receiverId: myId}
            ]
        });

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({message: "Internal server error"});
    }
};

export const sendMessage=async (req, res)=>{
    try {
        const {text, image}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id;

        imageUrl;
        if(image){
            //Upload base64 image to cloudinary
            const responseUrl=await cloudinary.uploader.upload(image);
            imageUrl=responseUrl.secure_url;
        }

        const newMessage=new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl // undefined if no image is sent to receiver
        });

        await newMessage.save();

        // todo: realtime functionality goes here - socket.io

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({message: "Internal server error"});
    }
}