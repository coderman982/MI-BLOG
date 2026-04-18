import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {
  const { navigate, token } = useAppContext()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'glass shadow-lg shadow-primary/10 py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className='flex justify-between items-center mx-6 sm:mx-16 xl:mx-28'>

        {/* Logo */}
        <div onClick={() => navigate('/')} className='cursor-pointer group flex items-center gap-2'>
          <img src={assets.logo} alt="logo" className='w-28 sm:w-36 transition-transform duration-300 group-hover:scale-105' />
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/admin')}
          className="relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-white overflow-hidden group cursor-pointer"
          style={{ background: 'linear-gradient(135deg, #5044E5, #8b5cf6)' }}
        >
          <span className='absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full'></span>
          <span>{token ? 'Dashboard' : 'Get Started'}</span>
          <img src={assets.arrow} alt="arrow" className='w-3 group-hover:translate-x-0.5 transition-transform' />
        </button>

      </div>
    </nav>
  )
}

export default Navbar
