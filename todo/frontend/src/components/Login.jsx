import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/UserContext';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [status,setStatus]=useState(200)
  const {UserDispatch}=useAuth();
  const navigate=useNavigate();
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobile') setMobile(value);
    else if (name === 'password') setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
     const {data:{data},status}=await axios.post("http://localhost:8080/api/login",{
        number:mobile,
        password
     })
     UserDispatch({
        type:"USER",
        payload:data
      })
      setStatus(200)
      Cookies.set('token', data.token, { expires: 7 });
      Cookies.set('id', data._id, { expires: 7 });
      toast("Login Successfully",{
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:"dark",
      });
         navigate("/");
       
    }
   catch(err){
    const msg=err.response.data.message
    setStatus(404)
    toast.error(msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:"dark",
    });
   }
  };

  return (
    <div className='flex flex-col gap-8 w-96 h-fit p-2 bg-inherit'>
      <form onSubmit={handleSubmit} className='h-full w-full flex flex-col gap-5'>
        <div>
          <label className='font-bold text-white'>Mobile No or Email</label>
          <input
            type="text"
            name="mobile"
            placeholder='xyz@gmail.com'
            className='w-80 h-10 border-b-2 border-orange-900 focus:outline-none text-center font-semibold text-lg bg-inherit text-white'
            required
            value={mobile}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className='font-bold text-white'>Enter Password</label>
          <input
            type="password"
            name="password"
            placeholder='******'
            className='w-80 h-10 border-b-2 border-orange-900 focus:outline-none text-center bg-inherit text-white'
            required
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className='bg-orange-900 w-[50%] mt-7 p-2 rounded-md text-white font-semibold self-center'>Login</button>
      </form>
     { status===404?<ToastContainer/>:""}
    </div>
  );
}

export default Login;
