
import { useState } from "react"
import axios from "axios";
import ListToDo from "./ListToDo";
import { useAuth } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
function AddToDo() {
   const [value,SetValue]=useState("");
   const{id,UserDispatch,todolist}=useAuth();
   const navigate=useNavigate();
   const token=Cookies.get('token');
   const handleUserInput=(e)=>{
    SetValue(e.target.value);
   }
   console.log(value);
 const  handleTodo= async()=>{
    if(!token){
        navigate("/auth");
        return;
    }
 try{
    const {data:{data}}=await axios.post(`http://localhost:8080/api/${id}/add`,{
        data:value
      })
    console.log(data);
      SetValue("");
      UserDispatch({
        type:"ADD_TODO",
        payload:data
      })
 }catch(err){
    console.log(err)
 }
}
  return (
    <>
    <div className='h-full flex justify-center'>
        <input type='text' className="m-10 focus:outline-none text-white w-96 text-center bg-black border-b-2 border-orange-800" placeholder='Add task...' value={value} onChange={handleUserInput}/>
        <button className="bg-orange-800 text-white font-bold z-10 p-2 m-10 w-24 rounded-md" onClick={handleTodo}>Add</button>
    </div>
    <ListToDo list={todolist}/>
    </>
  )
}

export default AddToDo