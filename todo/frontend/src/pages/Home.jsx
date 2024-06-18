import React, { useEffect } from 'react'
import AddToDo from '../components/AddToDo'
import { useAuth } from '../context/UserContext'
import axios from 'axios'
import Cookies from 'js-cookie';
import { ToastContainer,toast} from 'react-toastify';
function Home() {
  const{UserDispatch,token}=useAuth();
  useEffect(()=>{

    ( async()=>{
      const id=  Cookies.get('id')
      
       const {data:{data}}=await axios.get(`http://localhost:8080/api/${id}`)
       UserDispatch({
        type:"USER",
        payload:data
      })
    })()
  },[])
 
  return (
    <div>
    <AddToDo/>
    <ToastContainer />
    </div>
  )
}

export default Home