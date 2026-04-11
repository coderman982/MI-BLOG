import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {


    const navigate=useNavigate();//this is a hook from react-router-dom that allows us to programmatically navigate to different routes in our application. 
    // It returns a function that we can call with a path to navigate to that path. In this code,
    //  we use it to navigate to the home page when the logo is clicked and to the admin page when the login button is clicked.
    //When the logo is clicked, it calls navigate('/') which takes the user to the home page (the route defined as '/').



  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer'>
        <img onClick={() => navigate('/')} src={assets.logo} alt="logo" className='w-32 sm:w-44' />


      <button onClick={()=>navigate('/admin')} className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5">
        Login
        <img src={assets.arrow} alt="arrow" className='w-3' />
      </button>
    </div>
  )
}

export default Navbar
