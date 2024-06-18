const express=require('express');
const router=express.Router();
const addTodo=require('../controller/addTodo');
const deleteToDo=require('../controller/deleteTodo');
const SignUp=require('../controller/auth/signup');
const login=require('../controller/auth/login');
const userDetails=require('../controller/userDetails');
router.get("/",(req,res)=>{
    res.json({
        data:"Hello Nitish"
    })
})

router.post('/:id/add',addTodo);
router.delete('/:id/delete',deleteToDo);
router.post('/signup',SignUp);
router.post('/login',login);
router.get('/:id',userDetails);

module.exports=router;