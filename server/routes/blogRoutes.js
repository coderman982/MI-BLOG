import express from "express";
import { addBlog, deleteBlogById, getAllBlogs, getBlogById, tooglePublish } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter=express.Router();
//whenver add api  it will go to addblog and do all the things
blogRouter.post("/add",  upload.single('image'),auth,addBlog);//auth for authenticaton
blogRouter.get('/all',getAllBlogs);
blogRouter.get('/:blogId',getBlogById);
blogRouter.post('/delete',deleteBlogById);
blogRouter.post('/toggle-publish',auth,tooglePublish);


//upload.single('image') we will send image from front end it will parse it
//and send to req.file then medaikit will upload the file

//protect this route by authorization

export default blogRouter;
