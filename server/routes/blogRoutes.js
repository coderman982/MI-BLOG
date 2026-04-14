import express from "express";
import { addBlog } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter=express.Router();
//whenver add api  it will go to addblog and do all the things
blogRouter.post("/add",  upload.single('image'),auth,addBlog);//auth for authenticaton

//upload.single('image') we will send image from front end it will parse it
//and send to req.file then medaikit will upload the file

//protect this route by authorization

export default blogRouter;
