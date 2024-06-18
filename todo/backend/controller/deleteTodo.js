
const User=require('../models/userSchema');

const deleteToDo=async(req,res)=>{
   try{
    const {data}=req.query
    const{id}=req.params
    
    const findUser= await User.findById(id);
    const index=findUser.todolist.findIndex(item=>item===data);
    findUser.todolist.splice(index,1);
    await findUser.save();
    const {todolist}=findUser;
    res.json({
        message:"Item added successfully",
        data:todolist
    })
   }
   catch(err){
    console.log(err);
   }
}
module.exports=deleteToDo;