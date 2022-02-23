const jwt=require('jsonwebtoken')
const User = require("../model/userSchema");

const authenticate=async(req,res,next)=>{
try{
   
    const token=req.cookies.jwtoken
    const verifyToken=jwt.verify(token,process.env.SECRET_KEY)
    const rootUser=await User.findOne({_id:verifyToken._id,
    "tokens.token":token})

    if(!rootUser){
        console.log('user not found')
    }else{
        console.log('hora hai authenticate')
        req.token=token
        req.rootUser=rootUser
        req.userId=rootUser._id
        console.log(req.userId)
        next()
    }
}catch(err){
    res.status(422).send('no token provided')
    console.log(err)
}
}
module.exports=authenticate