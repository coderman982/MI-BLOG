import React, { use } from 'react'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {

    const handleSubmit = async (e) => {
        const[axios,setAxios]=useAppContext();//it will store axios instance in state and provide it to all components of frontend to make api calls to backend and get data from server and store it in context and provide it to all components of frontend
        const[email, setEmail] = useState('');
        const[password, setPassword] = useState('');

        //                        // The onChange event handler updates the email state variable with the value entered by the user in the input field. This allows you to capture and use the email input for authentication or other purposes in your login logic.
        //                        // The onChange event handler updates the password state variable with the value entered by the user in the input field. This allows you to capture and use the password input for authentication or other purposes in your login logic.


        e.preventDefault();
        // Handle login logic here, such as validating credentials and setting authentication state.
        try {
            const {data}=await axios.post('/api/admin/login', {email, password});//it will make api call to backend and get data from server and store it in data
            if(data.success){
                localStorage.setItem("token",data.token);//if login is successful it will store token in local storage and provide it to all components of frontend
                setToken(data.token);//it will store token in state and provide it to all components of frontend
                localStorage.setItem("token",data.token);//it will store token in local storage and provide it to all components of frontend
                axios.defaults.headers.common['Authorization']=` ${data.token}`;//it will set token in header of all api calls and provide it to all components of frontend
            }

            else{
                toast.error(data.message)//if login is failed it will show error message
            }
        } catch (error) {

            toast.error(error.message)//if there is error it will show error message;
            
        }
    }


  return (
    <div className='flex items-center justify-center h-screen'>
        <div className="w-full max-w-sm p-6 max-md:m-6 border border-primary/30
        shadow-xl shadow-primary/15 roundeed-lg">
            <div className='flex flex-col items-centerjustify center'>
                <div className='w-full py-6 text-center'>
                    <h1 className='text-3xl font-bold'><span className='text-primary'>ADMIN LOGIN</span></h1>
                    <p className='font-light'>Enter your credentials to access the admin panel.</p>
                </div>

                <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md
                text-gray-600'>
                    <div className='flex flex-col'>
                        <label>Email</label>
                        <input onChange={e=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter your email" required className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
                    </div>
                      <div className='flex flex-col'>
                        <label>Password</label>
                        <input onChange={e=>setPassword(e.target.value)} value={password} type="password" placeholder="Enter your password" required className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
                    </div>

                    <button type='submit' className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:
                    bg-primary/90 transition-all'>
                        Login
                    </button>


                </form>

            </div>
        </div>
      
    </div>
  )
}

export default Login
