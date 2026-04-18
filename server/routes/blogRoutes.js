import express from "express";
import { addBlog, addComment, deleteBlogById, getAllBlogs, getBlogById, getBlogComments, tooglePublish, generateContent } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter=express.Router();
//whenver add api  it will go to addblog and do all the things
blogRouter.post("/add",  upload.single('image'),auth,addBlog);//auth for authenticaton
blogRouter.get('/all',getAllBlogs);
blogRouter.get('/:blogId',getBlogById);
blogRouter.post('/delete',deleteBlogById);
blogRouter.post('/toggle-publish',auth,tooglePublish);

blogRouter.post("/add-comment",addComment);
blogRouter.get("/comments",getBlogComments);
blogRouter.post("/comments",getBlogComments);

blogRouter.post("/generate",auth,generateContent);//it will generate content by using gemini api and send it to frontend now donnect it to front end in
//  addblog.jsx file and make api call to this api and 
// send prompt from frontend and get generated content from backend and show it in
//  frontend in textarea where we write content of blog

//upload.single('image') we will send image from front end it will parse it
//and send to req.file then medaikit will upload the file

//protect this route by authorization

export default blogRouter;
