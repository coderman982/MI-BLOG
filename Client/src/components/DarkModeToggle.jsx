import React from 'react'
import { useDarkMode } from '../context/DarkModeContext'

const DarkModeToggle = () => {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-24 right-6 z-50 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-6 h-6">
        {/* Sun Icon */}
        <svg
          className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-500 ${
            isDark ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 1v2m0 16v2m11-9h-2M4 12H2m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m12.728 12.728l-1.414-1.414M7.05 16.95l-1.414 1.414" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Moon Icon */}
        <svg
          className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-500 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Sparkle Animation */}
        <div className={`absolute -top-1 -right-1 transition-all duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
          <svg className="w-3 h-3 text-yellow-300 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.605 1.603-.921 1.902 0l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.783-1.81 0-2.381l2.8-2.034a1 1 0 00.364-1.118l-1.07-3.292z" />
          </svg>
        </div>

        {/* Orbit Animation */}
        <div className={`absolute inset-0 transition-all duration-1000 ${isDark ? 'animate-spin' : ''}`}>
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full transform -translate-x-1/2"></div>
        </div>
      </div>

      {/* Tooltip */}
      <div className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-xs rounded whitespace-nowrap transition-all duration-300 ${
        isDark ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
      }`}>
        {isDark ? 'Light mode' : 'Dark mode'}
      </div>
    </button>
  )
}

export default DarkModeToggle
