import React from 'react'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const CommentTableItem = ({comment, fetchComments}) => {
const { blog, createdAt, _id} = comment;
const BlogDate = new Date(createdAt);

const {axios} = useAppContext()//it will get axios from context and use it to make api calls to backend and get data from server and store it in state and provide it to all components of frontend

const approveComment = async () => {
    try {
        const {data}=await axios.post('/api/admin/approve-comment',{id: _id})//it will make api call to backend and approve the comment in server and store the response in data

        if(data.success){
            toast.success(data.message)//if success it will show success message
            fetchComments()//it will call fetchComments function to get the updated list of comments from server and store it in state and provide it to all components of frontend
        }

        
    } catch (error) {
        toast.error(error.message)//if there is error it will show error message
    }
}

const deleteComment = async () => {
    try {

        const confirm = window.confirm("Are you sure you want to delete this comment?")//it will show confirmation dialog before deleting the comment
        if(!confirm) return;//if user cancels the confirmation dialog it will return and do nothing
        const {data}=await axios.post('/api/admin/delete-comment',{id: _id})//it will make api call to backend and delete the comment in server and store the response in data

        if(data.success){
            toast.success(data.message)//if success it will show success message
            fetchComments()//it will call fetchComments function to get the updated list of comments from server and store it in state and provide it to all components of frontend
        }

        else{
            toast.error(data.message)//if failed it will show error message
        }

        
    } catch (error) {
        toast.error(error.message)//if there is error it will show error message
    }
}


  

return (
<tr className='order-y border-gray-300'>
<td className='px-6 py-4'>
<b className='font-medium text-gray-600'>Blog</b> {blog.title}
<br/>
<br/>
<b className='font-medium text-gray-600'>Name</b>: {comment.name}
<br/>
<b className='font-medium text-gray-600'>Comment</b>: {comment.content}
</td>
<td className='px-6 py-4 max-sm:hidden'>
    {BlogDate.toLocaleDateString()}
</td>
<td className='px-6 py-4 '>


   <div className='inline-flex items-center gap-4'>{!comment.isApproved ?
   <img  onClick={approveComment} src={assets.tick_icon} alt="" className='w-5 hover:scale-110 transition-all cursor-pointer'/> :

<p className='text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1'>Approved</p>
}

<img  onClick={deleteComment} src={assets.bin_icon} alt="" className='w-5 hover:scale-110 transition-all cursor-pointer'/>

            
</div>
</td>
</tr>
)
}

export default CommentTableItem
