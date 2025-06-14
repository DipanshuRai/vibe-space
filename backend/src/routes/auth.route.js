import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { updateProfilePic, checkAuth } from "../controllers/auth.controller.js";

const router=express.Router();

// router.post("/signup", (req,res)=>{
//     // Here comes the signup controller
//     res.send("signup route");
// });

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfilePic);
router.get("/check", protectRoute, checkAuth);

export default router;