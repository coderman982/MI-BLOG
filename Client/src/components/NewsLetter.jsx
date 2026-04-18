import React, { useState } from 'react'

const NewsLetter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <div className='relative mx-6 sm:mx-16 xl:mx-28 my-20 rounded-3xl overflow-hidden'>

      {/* Background */}
      <div className='absolute inset-0 -z-10' style={{ background: 'linear-gradient(135deg, #5044E5 0%, #8b5cf6 50%, #a855f7 100%)' }}></div>
      <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl'></div>
      <div className='absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl'></div>

      <div className='relative px-8 sm:px-16 py-16 text-center text-white'>

        <div className='inline-flex items-center gap-2 bg-white/15 border border-white/20 px-4 py-1.5 rounded-full text-sm mb-6 backdrop-blur-sm'>
          <span className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></span>
          Join 1,000+ readers
        </div>

        <h2 className='text-3xl sm:text-4xl font-bold mb-3 text-white drop-shadow-sm'>Never miss a story</h2>
        <p className='text-white/80 text-sm sm:text-base mb-8 max-w-md mx-auto drop-shadow-sm'>
          Get the best articles delivered straight to your inbox. No spam, ever.
        </p>

        {submitted ? (
          <div className='inline-flex items-center gap-3 bg-white/15 border border-white/30 px-6 py-3 rounded-2xl backdrop-blur-sm'>
            <svg className='w-5 h-5 text-green-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
            </svg>
            <span className='font-medium'>You're subscribed! 🎉</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='flex items-center gap-2 max-w-md mx-auto bg-white/25 border border-white/35 rounded-2xl p-2 backdrop-blur-sm'>
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Enter your email address'
              required
              className='flex-1 bg-white/10 outline-none text-white placeholder-white/80 text-sm px-3 py-2 rounded-lg'
            />
            <button
              type='submit'
              className='px-5 py-2.5 bg-white text-primary font-semibold text-sm rounded-xl hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg'
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default NewsLetter
