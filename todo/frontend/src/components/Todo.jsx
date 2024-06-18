import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useAuth } from '../context/UserContext';
function Todo({index,item}) {
    const[checked,SetChecked]=useState(false);
    const handleCheckInput=()=>{
        SetChecked(!checked);
       }
       const{UserDispatch,id}=useAuth();

       const deleteTodoList= async(item)=>{
         try{
            const {data:{data}}=await axios.delete(`http://localhost:8080/api/${id}/delete?data=${item}`)
         UserDispatch({
            type:"ADD_TODO",
            payload:data
            
          })
          if(checked){
            SetChecked(false);
          }
         }catch(err){
            console.log(err);
         }
       }
     
  return (
    <div className={`flex justify-between m-8 p-2 rounded-xl ${!checked?"bg-slate-600/20":"bg-blue-300"}`}>
    <input type="checkbox" onChange={handleCheckInput} checked={checked}/>
   <p className={` font-semibold ${!checked?"text-white":"line-through text-black"}`} key={index}>{item}</p>
 
<button onClick={()=>deleteTodoList(item)}>
<span className="material-symbols-outlined text-orange-800 ">
delete
</span>
</button>
</div>
  )
}

export default Todo