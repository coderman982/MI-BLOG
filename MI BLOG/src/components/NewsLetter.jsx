import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
      <h1 className='md:text-4xl text-2xl font-semibold'>You will never miss a blog</h1>
      <p className='md:text-lg text-gray-500/70 pb-8'>Subscribe to our newsletter to stay updated!</p>
      <form className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
        <input
          className='border border-gray-300 rounded-l-md h-full outline-none w-full px-3 text-gray-500'
          type='text'
          placeholder='Enter your email id'
          required
        />
        <button
          type='submit'
          className='md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-r-md'
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsLetter
