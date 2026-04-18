import React from 'react'
import { use } from 'react';
import toast from 'react-hot-toast';

const BlogTableItem = ({blog,fetchBlogs,index}) => {

const{title,createdAt}=blog;
const  BlogDate=new Date(createdAt)


const {axios}=useAppContext()//it will get axios from context and use it to make api calls to backend and get data from server and store it in state and provide it to all components of frontend

const deleteBlog=async()=>{
    const confirm=window.confirm("Are you sure you want to delete this blog?")//it will show confirmation dialog before deleting the blog
    if(!confirm) return;//if user cancels the confirmation dialog it will return and do nothing

    try {

        const {data}=await axios.post('/api/blog/delete',{id: blog._id})//it will make api call to backend and delete the blog from server and store the response in data

        if(data.success){
            toast.success(data.message)//if success it will show success message
            await fetchBlogs()//it will call fetchBlogs function to get the updated list of blogs from server and store it in state and provide it to all components of frontend
        }

        else{
            toast.error(data.message)//if failed it will show error message
        }


        } catch (error) {

            toastt.error(error.message);
        
    }
}

const togglePublish=async()=>{

try {
        const {data}=await axios.post('/api/blog/toggle-publish',{id: blog._id})//it will make api call to backend and toggle the publish status of the blog in server and store the response in data
    if (data.success) {
        toast.success(data.message)
        await fetchBlogs()
    } else {
        toast.error(data.message)
    }

} catch (error) {
    toast.error(error.message)
    
}}

 return (
<tr className='border-y border-gray-300'>
<th className='px-2 py-4'>{ index }</th>
<td className='px-2 py-4'> {title} </td>
<td className='px-2 py-4 max-sm:hidden'> {BlogDate.toDateString()} </td>
<td className='px-2 py-4 max-sm:hidden'>
<p className={`${blog.isPublished? "text-green-600": "text-orange-700"}`}
>{blog.isPublished ? 'Published' : 'Unpublished'}</p>
</td>
<td className='px-2 py-4 flex text-xs gap-3'>
<button onClick={togglePublish} className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>{blog.
isPublished ? 'Unpublish': 'Publish'}</button>
<img src={assets.cross_icon} className='w-8 hover: scale-110 transition-all
cursor-pointer' alt="" onClick={deleteBlog} /> I
</td>
</tr>

 )
}
export default BlogTableItem
