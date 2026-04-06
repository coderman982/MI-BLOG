import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/AddBlog'
import ListBlog from './pages/admin/ListBlog'
import Comments from './pages/admin/Comments'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/admin' element={<Layout />}>
        
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