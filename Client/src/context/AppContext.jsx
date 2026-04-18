//app context is used to share data between components without prop drilling

import axios from "axios";
import { useContext, useEffect, useState, createContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

//axios is used to make api calls to backend and get data from server and store it in context and provide it to all components of frontend

axios.defaults.baseURL=import.meta.env.VITE_BASE_URL;//it will set base url for all api calls
const AppContext=createContext();

export const AppProvider=({children})=>{//it will wrap our application and provide data to all components
//for backend we will use axios to make api calls and get data from server and store it in context and provide it to all components of frontend

    const navigate=useNavigate();
    const [token, setToken] = useState(null);//it will store token in state and provide it to all components of frontend
    const[blogs,setBlogs]=useState([]);//it will store blogs in state and provide it to all components of frontend
    const[input,setInput]=useState("");//it will store input data in state and provide it to all components of frontend

    const fetchBlogs=async()=>{//it will fetch blogs from server and store it in state and provide it to all components of frontend
        try {
            const {data}=await axios.get('/api/blog/all');
            if(data.success) setBlogs(data.blogs);
            // If API fails, BlogList falls back to local blog_data silently
        } catch (error) {
            // Backend offline — no toast, local fallback data is used instead
            console.log('Backend unavailable, using local data:', error.message);
        }

    }
     
    useEffect(()=>{
        fetchBlogs();//it will call fetchBlogs function when component is mounted and get data from server and store it in state
        //  and provide it to all components of frontend

        const token=localStorage.getItem("token");//it will get token from local storage and store it in state and provide it to all components of frontend
        if(token){
            setToken(token);//if token is present it will store it in state and provide it to all components of frontend
            axios.defaults.headers.common['Authorization']=` ${token}`;//it will set token in header of all api calls and provide it to all components of frontend
        }
    },[])




    const value={

        axios,navigate,token,setToken,blogs,setBlogs,input,setInput//it will provide all these data to all components of frontend

    };
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
};


export const useAppContext=()=>{//it will return the context value to the component where we want to use it
    return useContext(AppContext);
}