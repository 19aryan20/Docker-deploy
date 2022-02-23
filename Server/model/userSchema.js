const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    messages:[
        {
            name1:{
                type:String,
                require:true
            },
            name2:{
                type:String,
                require:true
            }, 
        }
    ],
    tokens:[
        {
            token:{
                type:String,
                require:true
            }

        }
    ]
})

userSchema.methods.generateAuthToken=async function(){
    try{
    let token=jwt.sign({_id:this._id},process.env.SECRET_KEY)
    this.tokens=this.tokens.concat({token:token})
    await this.save()
    return token
    }
    catch(err){
        console.log(err)
    }      
}

userSchema.methods.addMessage=async function(name1,name2){
     try {
         this.messages=this.messages.concat({name1,name2})
         await this.save()
         return this.messages
     } catch (err) {
         console.log(err)
     }
}

const User=new mongoose.model('User',userSchema)

module.exports=User