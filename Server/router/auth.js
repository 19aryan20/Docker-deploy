const express = require("express");
const User = require("../model/userSchema");
const Member=require('../model/userSchema1')
const router=express.Router()
const jwt=require('jsonwebtoken');
const e = require("cors");
const authenticate=require('../middleware/authenticate')

router.get('/', (req, res) => {
    res.end('hello from server auth')
});

router.post('/signin',
async(req, res) => {
    const {name,email,password,cpassword}=req.body
    if(!name || !email || !password || !cpassword){
        return res.status(422).json('plzz fill all details')
    }
try{
    const userexist=await User.findOne({email:email})
    if(userexist){
        console.log('hai isme')
        return res.status(422).json({error:'email already exist'})
}else if(password!= cpassword){
    return res.status(422).json({error:'wrong password'})
}
    const user=new User(req.body)
    await user.save()
    res.json({msg:'user registered succefully'})}
catch(err){
    console.log('erre',err)
}
});
router.post('/login',
async (req, res) => {
   let token
   const {email,password}=req.body
   console.log('login hojayega')
   if(!email || !password){
       return res.status(422).json('pls fill the data')
   }
   try{
   const user=await User.findOne({email:email})
  
   console.log(user.password)
      //if this match will get full data
   if(user && user.password==password){ 
     token= await user.generateAuthToken()
     console.log(token)
     res.cookie('jwtoken',token)
     return res.status(200).json('user login successfully')
    }res.status(422).json('invalid credentials')
}catch(err){
    console.log(err)
}
});

router.get('/love',authenticate,(req,res,next)=>{
    console.log(req.rootUser)
    res.send(req.rootUser)
})
router.post('/contact',authenticate,async(req,res)=>{
      try {
          const {name1,name2}=req.body
          if(!name1 || !name2){
              return res.status(422).json("invalid")
          }
          
          const user=await User.findOne({_id:req.userId})
          console.log(user)
          if(user){
              
              const msg=await user.addMessage(name1,name2)
              await user.save()
              res.status(200).json('done bro')
          }

      } catch (err) {
          console.log(err)
      }
})

router.get('/logout',(req,res)=>{
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send('user logout')
})

module.exports=router