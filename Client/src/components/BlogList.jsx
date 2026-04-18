import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { motion } from 'framer-motion'
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'

const BlogList = () => {
  const [menu, setMenu] = useState('All')
  const { blogs, input } = useAppContext()

  const displayBlogs = blogs.length > 0 ? blogs : blog_data

  const filteredBlogs = () => {
    let result = displayBlogs
    if (input && input !== '') {
      result = result.filter(blog =>
        blog.title.toLowerCase().includes(input.toLowerCase()) ||
        blog.category.toLowerCase().includes(input.toLowerCase())
      )
    }
    if (menu !== 'All') {
      result = result.filter(blog => blog.category === menu)
    }
    return result
  }

  const filtered = filteredBlogs()

  return (
    <div className='px-6 sm:px-16 xl:px-28 pb-20'>

      {/* Section header */}
      <div className='text-center mb-10'>
        <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-2'>
          Latest <span className='gradient-text'>Articles</span>
        </h2>
        <p className='text-gray-400 text-sm'>Explore stories, ideas, and insights</p>
      </div>

      {/* Category pills — motion.span stays outside the button, no layoutId conflict */}
      <div className='flex flex-wrap justify-center gap-3 mb-12'>
        {blogCategories.map(item => (
          <button
            key={item}
            onClick={() => setMenu(item)}
            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer overflow-hidden ${
              menu === item
                ? 'text-white shadow-lg shadow-primary/30'
                : 'text-gray-500 bg-white border border-gray-200 hover:border-primary/30 hover:text-primary'
            }`}
          >
            {/* Animated background — rendered for ALL items, just invisible when not active */}
            <motion.span
              layoutId="pill-bg"
              className='absolute inset-0 rounded-full pointer-events-none'
              animate={{
                opacity: menu === item ? 1 : 0,
                scale: menu === item ? 1 : 0.8,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              style={{ background: 'linear-gradient(135deg, #5044E5, #8b5cf6)' }}
            />
            {/* Text always on top */}
            <span className='relative z-10'>{item}</span>
          </button>
        ))}
      </div>

      {/* Blog grid */}
      {filtered.length === 0 ? (
        <div className='text-center py-20 text-gray-400'>
          <svg className='w-16 h-16 mx-auto mb-4 opacity-30' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg>
          <p className='text-lg font-medium'>No blogs found</p>
          <p className='text-sm mt-1'>Try a different search or category</p>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
          {filtered.map((blog, i) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogList
