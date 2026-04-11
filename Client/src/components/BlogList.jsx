import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { motion } from 'framer-motion'
import BlogCard from './BlogCard'

const BlogList = () => {

    const[menu,setMenu]=useState('All')



  return (
    <div>
        <div className='flex flex-wrap justify-center gap-4 sm:gap-8 my-10'>
            {blogCategories.map((item) => (
            <div key={item} className='relative'>
                <button
                  onClick={() => setMenu(item)}
                  className={`cursor-pointer text-gray-500 ${menu === item && 'text-white px-4 pt-0.5' }`}>
                    {item}
                    {menu===item && (
                        <motion.div className='absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full' layoutId="underline" transition={{type:'spring',stiffness:500,damping:30}}></motion.div>
                    )}
                </button>
            </div>
            ))}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
        gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40' >
            {blog_data.filter((blog) => menu === 'All' ? true : blog.category === menu)
        .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
        ))}</div>
    </div>
  )
}

export default BlogList

//This code makes a row of buttons from blogCategories, and the selected one gets special styling.
//blogCategories.map((item) => ...) creates one button for each category.
//const [menu, setMenu] = useState('All') keeps track of the current selected item.
//onClick={() => setMenu(item)} changes the selected category when you click.
//  className={`cursor-pointer text-gray-500 ${menu === item && 'text-white px-4 pt-0.5' }`}
//That means: always use cursor-pointer text-gray-500
//if menu === item is true, then also add text-white px-4 pt-0.5
//if false, nothing extra is added
//So the clicked button becomes white text and a little extra padding.{menu===item && (
 // <div className='absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full'></div>
//This means:only show that extra colored background when this button is selected
//In one line
//It’s just:render buttons click button → change state
//if button is selected → add extra style and show background
// motion is from Framer Motion, a React animation library. It makes elements animate smoothly when they change position or appearance. Here, 
// it animates the background circle when you select a category. The layoutId="underline" tells Framer Motion to treat that div as the same element when it moves,
//  so it animates between positions instead of just jumping. The transition prop controls how the animation behaves (springy in this case).}
//Grid Container (<div>)
