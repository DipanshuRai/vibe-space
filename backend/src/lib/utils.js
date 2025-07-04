import jwt from "jsonwebtoken";

export const generateToken=(userId, res)=>{
    const token=jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn:"7d"
    });

    res.cookie("jwt", token, {
        maxAge: 7*24*60*60*1000,
        httpOnly: true, // prevent XSS attacks (cross site scripting)
        sameSite: "strict", // prevent CSRF attacks (cross site request forgery)
        secure: process.env.NODE_ENV!=="development" // make 'false' if in development phase, else 'true'
    })
    return token;
}