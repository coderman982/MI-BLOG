import React from 'react'
import { assets, footer_data } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer className='bg-gray-950 text-gray-600'>

      <div className='px-8 sm:px-16 xl:px-28 pt-16 pb-10'>
        <div className='flex flex-col md:flex-row gap-12 justify-between mb-12'>

          {/* Brand */}
          <div className='max-w-xs'>
            <img src={assets.logo} alt='logo' className='w-32 sm:w-40 mb-4 opacity-80' />
            <p className='text-sm leading-relaxed text-gray-600'>
              Your creative space — write freely, share boldly, connect deeply.
            </p>
            <div className='flex gap-4 mt-6'>
              <a href='#' className='w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer'>
                <img src={assets.facebook_icon} alt='fb' className='w-4 brightness-200 invert' />
              </a>
              <a href='#' className='w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer'>
                <img src={assets.twitter_icon} alt='tw' className='w-4 brightness-200 invert' />
              </a>
              <a href='#' className='w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer'>
                <img src={assets.googleplus_icon} alt='g+' className='w-4 brightness-200 invert' />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className='flex flex-wrap gap-10 md:gap-16'>
            {footer_data.map((section, index) => (
              <div key={index}>
                <h3 className='text-white font-semibold text-sm mb-4 tracking-wide uppercase'>{section.title}</h3>
                <ul className='space-y-2.5'>
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href='#' className='text-sm text-gray-600 hover:text-primary transition-colors duration-200'>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className='h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8'></div>

        {/* Bottom */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600'>
          <p>© 2025 ContentCook. All rights reserved.</p>
          <div className='flex gap-6'>
            <a href='#' className='hover:text-gray-600 transition-colors'>Privacy Policy</a>
            <a href='#' className='hover:text-gray-600 transition-colors'>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
