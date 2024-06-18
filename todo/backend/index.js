const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv');
const dbConnect=require('./config/DBConnect')
const User=require('./models/userSchema');
const router=require('./route/router');
dotenv.config();
dbConnect();

const app=express();
app.use(cors());
app.use(express.json());
app.use('/api',router);

const PORT=process.env.PORT||8090;;
// User.insertMany([{email:"nitish@gmail.com",password:"1234"}]);
mongoose.connection.once("open",()=>{
    console.log("Connected to DataBase");
    app.listen(PORT,(req,res)=>{
        console.log("Server started....")
    });
})
