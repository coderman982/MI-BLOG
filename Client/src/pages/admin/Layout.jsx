import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {
  const { axios, setToken, navigate } = useAppContext()

  const logout = () => {
    localStorage.removeItem("token")
    axios.defaults.headers.common['Authorization'] = null
    setToken(null)
    navigate('/')
  }

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>

      {/* Top Navbar */}
      <header className='flex items-center justify-between h-[70px] px-6 sm:px-10 bg-white border-b border-gray-100 shadow-sm sticky top-0 z-40'>
        <img
          src={assets.logo}
          alt="Logo"
          className='w-28 sm:w-36 cursor-pointer hover:opacity-80 transition-opacity'
          onClick={() => navigate('/')}
        />
        <div className='flex items-center gap-4'>
          <div className='hidden sm:flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full text-xs text-green-600 font-medium'>
            <span className='w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse'></span>
            Admin Active
          </div>
          <button
            onClick={logout}
            className='text-sm px-5 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-200 cursor-pointer font-medium'
          >
            Logout
          </button>
        </div>
      </header>

      {/* Body */}
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar />
        <main className='flex-1 overflow-y-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
