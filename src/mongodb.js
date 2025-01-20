const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/MongoDBPractice")
.then(()=>{
    console.log("MongoDb connected")
})
.catch(()=>{
    console.log("Failed To Connect")
})

const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection= new mongoose.model("LoginSchema",LoginSchema)
module.export=collection