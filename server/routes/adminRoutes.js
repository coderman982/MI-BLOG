//route for adminController as after login route for user


import express from "express";
import adminLogin from "../controllers/adminController.js";
import auth from "../middleware/auth.js";
import { get } from "mongoose";
import { approveCommentById, deleteCommentById, getAllBlogsAdmin, getDashboard, gettAllComments } from "../controllers/adminController.js";

const adminRouter=express.Router();

adminRouter.post("/login",adminLogin);// whenever we hit /login endpoint it execute adminlogin.js file
adminRouter.get("/comments",auth,gettAllComments);
adminRouter.get("/blogs",auth,getAllBlogsAdmin);
adminRouter.post("/delete-comment",auth,deleteCommentById);
adminRouter.post("/approve-comment",auth,approveCommentById);
adminRouter.get("/dashboard",auth,getDashboard);

export default adminRouter;


