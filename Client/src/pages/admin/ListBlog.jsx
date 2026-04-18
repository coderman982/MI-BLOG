import React from 'react'
import BlogTableItem from '../../components/BlogTableItem';
import { useState, useEffect } from 'react';
import { blog_data } from '../../data/blog_data';

const ListBlog = () => {

const [blogs, setBlogs] = useState([]);

const {axios}=useAppContext()//it will get axios from context and use it to make api calls to backend and get data from server and store it in state and provide it to all components of frontend

const fetchBlogs = async () => {

  try {
    const {data}=await axios.get('/api/admin/blogs')//it will make api call to backend and get data from server and store it in data
    if(data.success){
      setBlogs(data.blogs)
    }

    else{
      toast.error(data.message)//if failed it will show error message
    }
  } catch (error) {
    toast.error(error.message)//if there is error it will show error message
  }
setBlogs (blog_data)
}
useEffect ((D)=>{
fetchBlogs()
},[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
      <h1>All Blogs</h1>

      <div className='relative h-4/5 mt-4  max-w-4xl overflow-x-auto shadow rounded-lg
scrollbar-hide bg-white'>
<table className='w-full text-sm text-gray-500'>
<thead className='text-xs text-gray-600 text-left uppercase'>
<tr>
<th scope='col' className='px-2 py-4 xl:px-6' > # </th>
<th scope='col' className='px-2 py-4'> Blog Title </th>
<th scope='col' className='px-2 py-4 max-sm:hidden' > Date </th>
<th scope='col' className='px-2 py-4 max-sm:hidden' > Status </th>
<th scope='col' className='px-2 py-4'> Actions </th>
</tr>
</thead>
<tbody>
  {blogs.map((blog,index)=>(
    <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index+1} />
  ))}
</tbody>
</table>
</div>


    </div>
  )
}

export default ListBlog
