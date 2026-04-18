import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/AddBlog'
import ListBlog from './pages/admin/ListBlog'
import Comments from './pages/admin/Comments'
import Login from '../admin/Login'
import 'quill/dist/quill.snow.css'
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContext'

const App = () => {

  const {token}=useAppContext()//it will get token from context and use it in this component to check if user is authenticated or not
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/admin' element={token ? <Layout /> : <Login />} >
        
          <Route index element={<Dashboard />} />
          <Route path='addBlog' element={<AddBlog />} />
          <Route path='listBlog' element={<ListBlog />} />
          <Route path='comment' element={<Comments />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
// {/* <Route index element={<Dashboard />} /> //index element means the default route for the parent component and will be rendered when the parent route is accessed without any sub-route. In this case, when you navigate to /admin, the Dashboard component will be rendered by default.
//         <Route path='addBlog' element={<AddBlog />} />
//         <Route path='listBlog' element={<ListBlog />} />
//         <Route path='comment' element={<Comment />} />
//       </Routes> */} this is for nested routes in admin layout, you can uncomment it and create the corresponding components for dashboard, addBlog, listBlog and comment.
//        <Route path='/admin' element={token?<Layout />:<Login />} >// if user is authenticated,and token is valid render the Layout component that is admin panel, otherwise render the Login component.
//  You can replace true with your actual authentication logic to control access to the admin panel.

//toaster is used to show notification in application, you can use it to show success or error message when user perform any action like add blog, delete blog, approve comment etc. you can import it in any component and use it like this toast.success("Blog added successfully") or toast.error("Failed to add blog")