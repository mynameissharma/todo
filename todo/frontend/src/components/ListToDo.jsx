import React from 'react'
import Todo from './Todo';
function ListToDo({list}) {
   
  return (
    <div className='w-[40rem] bg-gray-800/40 max-h-96  m-auto overflow-auto rounded-lg'>
        {list && list.map((item,index)=><Todo index={index} item={item}/>)}
    </div>
  )
}

export default ListToDo;