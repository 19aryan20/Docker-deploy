const express = require("express");
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
app.use(cookieParser())

dotenv.config({path:'./config.env'})
const PORT = 5000; 
const db=process.env.DATABASE

app.use(express.json())
app.use(require('./router/auth'))

mongoose.connect(db).then(()=>{
    console.log('success')
}).catch((err)=>{
    console.log(err)
})

app.listen(PORT,()=>{})
