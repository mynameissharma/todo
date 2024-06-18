const User=require('../models/userSchema');
const userDetails= async( req,res)=>{
    try{
      const {id}=req.params;
      const user= await User.findById(id);
      const {password,...rest}=user._doc;
      res.status(200).json({
        success:true,
        data:rest
      })
    }catch(err){
        console.log(err)
    }
}

module.exports=userDetails;