import fs from 'fs'
import imagekit from '../config/imagekit.js';
import { format } from 'path';
import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';
import main from '../config/Gemini.js';



export const addBlog=async(req,res)=>{


    try{

        const {title,subTitle,description,category,isPublished}=JSON.parse(req.body.blog);//we send all these data from blog req
        const imageFile=req.file;//we add image and send it by multer


        //check if all fields are present

        if(!title||!description||!category||!imageFile){
            return res.json({success:false,message:"missing fields"})
        }

        //we will upload image from cloud and to upload it use fs

        const fileBuffer=fs.readFileSync(imageFile.path)

        //upload image to imagekit then it will optimize then strore in mongo db
        const response=await imagekit.upload({
            file:fileBuffer,
            fileName:imageFile.originalname,
            folder:"/blogs"//optional it will arange all image in this folder in imagekit
        })

        //optimization through imgekit url tranformation

        const optimizedImageUrl=imagekit.url({
            path:response.filePath,
            transformation:[
                {quality:'auto'},//auto compression
                {format:'webp'},//convert to modern frames
                {width:'1280'}//width resizing
                
            ]
        });

        const image=optimizedImageUrl;

        //now we can save all the data in mongo db database

        await Blog.create({title,subTitle,description,category,isPublished,image})

        res.json({success:true, message:"blog has been created"})

    }

    catch(error)
    {

               res.json({success:false, message:error.message})
 

    }
}


//whenever we add new blog post from admin dashboard by req
//now we create new api router for this

//now we will create api route to get all blogs

export const getAllBlogs=async(req,res)=>{

    try {
        
        const blogs=await Blog.find({isPublished:true})//whenever is published property is true it will return all the
        //it will return all blogpost and save it in blogs
        res.json({success:true,blogs})

    } catch (error) {

        res.json({success:false, message:error.message})

        

    }


}


//to get individual blog data

    export const getBlogById=async(req,res)=>{
        try {
            const {blogId}=req.params;
            const blog=await Blog.findById(blogId)
            if(!blog){
                return res.json({success:false,message:"blog not found"})
            }
            res.json({success:true,blog})
        } catch (error) {
            res.json({success:false,message:error.message})
        }
    }
    
    //to find and delte blog
    export const deleteBlogById=async(req,res)=>{
        try {
            const {id}=req.body;
            await Blog.findByIdAndDelete(id);

            //dete all comments with blogs also

            await Comment.deleteMany({blog:id});//it will delete all comment with this blog id
            res.json({success:true,message :"blog deleted"})
            
        } catch (error) {

            res.json({success:false,message:error.message})
            
        }

    }

    //to publish and unpublish a blog

    export const tooglePublish=async(req,res)=>{
        try {


              const {id}=req.body;
              const blog=await Blog.findById(id);
              blog.isPublished=!blog.isPublished;
              await blog.save();
              res.json({success:true,message:"Blog status updated"})
            
        } catch (error) {
             res.json({success:false,message:error.message})

            
        }
    }

    export const addComment=async(req,res)=>{
        try {

            const {blog ,name,content}=req.body;
            await Comment.create({blog,name,content})
            res.json({success:true,message:"comment added successfully"})            
        } catch (error) {

            res.json({success:false,message:error.message})
            
        }
    }
   

    export const getBlogComments=async(req,res)=>{
        try {
            const blogId = req.query.blogId || req.body.blogId;
            const comments=await Comment.find({blog:blogId,isApproved:true}).sort({createdAt:-1});
            res.json({success:true,comments})
        } catch (error) {
            res.json({success:false,message:error.message})
        }
    }


    export const generateContent=async(req,res)=>{
        try {
            const {prompt}=req.body;
            const content=await main(prompt + "Generate a blog post with this title in simple format with heading and subheading and also add some relevant emojis in the content");
            res.json({success:true,content})
        } catch (error) {
            res.json({success:false,message:error.message})
        }
    }
