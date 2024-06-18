const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
     username:{
         type:String,
         required:true
     },
     email:{
        type:String,
        required:true
     },
     mobileno:{
         type:String,
         required:true
     },
     password:{
        type:String,
        required:true
     },
     todolist:{
          type:Array
     }
})

const User=mongoose.model('User',userSchema);

module.exports=User;