import React, { use } from 'react'
import { assets } from '../../assets/assets'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {



    const {axios, setToken,navigate}=useAppContext()//it will get axios from context and use it to make api calls to backend and get data from server and store it in state and provide it to all components of frontend

    const logout=()=>{

      localStorage.removeItem("token")//it will remove token from local storage
      axios.defaults.headers.common['Authorization']=null;//it will remove token from header of all api calls and provide it to all components of frontend
      setToken(null);//it will set token in state to null and provide it to all components of frontend    
      navigate('/')
    }

  return (
    <>

    <div className='flex items-center justify-between py-2 h-[720px] px-4 sm:px-12
    border-b border-gray-200'>
        <img src={assets.logo} alt="Logo" className='w-32 sm:w-40 cursor-pointer'
        onClick={()=>navigate('/') }/>
        <button  onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>Logout</button>
    </div>
    <div className='flex h-[calc(100vh-70px)]'>
      <Sidebar />
      <Outlet />

    </div>
      
    </>
  )
}

export default Layout
