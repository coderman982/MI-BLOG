import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {
  const { setInput, input } = useAppContext()
  const inputRef = useRef(null)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setInput(inputRef.current.value)
  }

  const onClear = () => {
    setInput('')
    inputRef.current.value = ''
  }

  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center overflow-hidden animated-gradient pt-24 pb-16'>

      {/* Decorative blobs */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px] pointer-events-none'></div>

      <div className='relative text-center px-6 max-w-5xl mx-auto'>

        {/* Badge */}
        <div className='inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full text-sm font-medium text-primary border border-primary/30 bg-primary/8 backdrop-blur-sm shadow-sm shadow-primary/10'>
          <span className='w-2 h-2 bg-primary rounded-full animate-pulse'></span>
          <p>New: AI Blog Generation is Live</p>
          <img src={assets.star_icon} className='w-3.5 float' alt='' />
        </div>

        {/* Headline */}
        <h1 className='text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-800'>
          Your own{' '}
          <span className='gradient-text'>blogging</span>
          <br />platform
        </h1>

        <p className='max-w-xl mx-auto text-gray-500 text-base sm:text-lg leading-relaxed mb-10'>
          A space to think out loud — share what others might censor, write without filters.
          Whether one word or a thousand, this is your platform.
        </p>

        {/* Search Bar */}
        <form onSubmit={onSubmitHandler} className='relative flex items-center max-w-lg mx-auto shadow-xl shadow-primary/10 rounded-2xl overflow-hidden bg-white border border-gray-100'>
          <div className='flex items-center pl-4 text-gray-400'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
          </div>
          <input
            ref={inputRef}
            type='text'
            placeholder='Search for blogs, topics, ideas...'
            className='flex-1 px-4 py-4 outline-none text-gray-700 bg-transparent placeholder-gray-400 text-sm'
          />
          <button
            type='submit'
            className='m-2 px-6 py-2.5 rounded-xl text-white text-sm font-medium cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 hover:scale-105'
            style={{ background: 'linear-gradient(135deg, #5044E5, #8b5cf6)' }}
          >
            Search
          </button>
        </form>

        {/* Clear search */}
        {input && (
          <div className='mt-4 animate-fade-in'>
            <button
              onClick={onClear}
              className='inline-flex items-center gap-1.5 text-xs text-gray-500 border border-gray-200 bg-white px-3 py-1.5 rounded-full hover:border-primary/40 hover:text-primary transition-all cursor-pointer shadow-sm'
            >
              <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
              Clear: "{input}"
            </button>
          </div>
        )}

        {/* Stats row */}
        <div className='flex items-center justify-center gap-8 mt-12 text-sm text-gray-400'>
          <div className='flex flex-col items-center'>
            <span className='text-2xl font-bold text-gray-700'>10+</span>
            <span>Articles</span>
          </div>
          <div className='w-px h-8 bg-gray-200'></div>
          <div className='flex flex-col items-center'>
            <span className='text-2xl font-bold text-gray-700'>5</span>
            <span>Categories</span>
          </div>
          <div className='w-px h-8 bg-gray-200'></div>
          <div className='flex flex-col items-center'>
            <span className='text-2xl font-bold text-gray-700'>AI</span>
            <span>Powered</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 text-xs'>
        <span>Scroll</span>
        <div className='w-px h-8 bg-gradient-to-b from-gray-400 to-transparent animate-pulse'></div>
      </div>
    </div>
  )
}

export default Header
