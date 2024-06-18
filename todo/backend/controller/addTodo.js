const User=require('../models/userSchema');
const addTodo= async(req,res)=>{
  try{
    const {data}=req.body;
    const {id}=req.params;
  
 const findUser=await User.findById(id);
 findUser.todolist.push(data);
  await findUser.save();
  const{todolist}=findUser
  res.json({message:'Todo item added successfully',
    data:todolist
  });
  }catch(err){
    console.log(err);
  }
}

module.exports=addTodo;