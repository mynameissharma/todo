import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status,setStatus]=useState(200)
  const {UserDispatch}=useAuth();
  const navigate=useNavigate()
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'mobile') setMobile(value);
    else if (name === 'password') setPassword(value);
    else if (name === 'confirmPassword') setConfirmPassword(value);
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    try{
        const {data:{data},status}=await axios.post("http://localhost:8080/api/signup",{
            username:name,
            email,
            mobileno:mobile,
            password,
            cpassword:confirmPassword
        })
        UserDispatch({
            type:"USER",
            payload:data
          })
        Cookies.set('token', data.token, { expires: 7 });
        Cookies.set('id', data._id, { expires: 7 });
        setStatus(200)
        navigate("/");
        toast("Account Created Successfully", {
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
    catch(err){
      setStatus(404);
      const msg=err.response.data.message
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
        console.log(err)
    }
  };

  return (
    <div className=' w-96 flex flex-col h-[28rem] p-2 bg-inherit overflow-auto'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-between h-full w-full'>
        <div>
          <label className='font-bold text-white'>Enter Name</label>
          <input
            type="text"
            name="name"
            placeholder='Enter Your Name'
            className='w-80 h-10 border-b-2 border-orange-700 focus:outline-none text-center font-semibold text-lg bg-inherit text-white'
            required
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className='font-bold text-white'>Enter Email</label>
          <input
            type="email"
            name="email"
            placeholder='xyz@gmail.com'
            className='w-80 h-10 border-b-2 border-orange-700 focus:outline-none text-center font-semibold text-lg bg-inherit text-white'
            required
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className='font-bold text-white'>Mobile Number</label>
          <input
            type="number"
            name="mobile"
            placeholder='1234567890'
            className='w-80 h-10 border-b-2 border-orange-700 focus:outline-none text-center font-semibold text-lg bg-inherit text-white'
            required
            value={mobile}
            onChange={handleInputChange}
            maxLength='10'
          />
        </div>
        <div>
          <label className='font-bold text-white'>Password</label>
          <input
            type="password"
            name="password"
            placeholder='******'
            className='w-80 h-10 border-b-2 border-orange-700 focus:outline-none text-center bg-inherit text-white'
            required
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className='font-bold text-white'>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder='******'
            className='w-80 h-10 border-b-2 border-orange-700 focus:outline-none text-center bg-inherit text-white'
            required
            value={confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className='bg-orange-700 w-[50%] mt-6 self-center p-2 rounded-md text-white font-semibold'>Signup</button>
      </form>
      { status===404?<ToastContainer/>:""}
    </div>
  );
}

export default Signup;
