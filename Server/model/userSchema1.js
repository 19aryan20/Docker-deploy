const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    rev:{
        type:String,
        require:true
    },
    star:{
        type:String,
        require:true
}})

const Member=new mongoose.model('Member',userSchema)

module.exports=Member