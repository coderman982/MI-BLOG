import fs from 'fs'
import imagekit from '../config/imagekit';
import { format } from 'path';
import Blog from '../models/Blog';



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