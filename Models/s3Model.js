const mongoose=require('mongoose')

const s3Schema=new mongoose.Schema({
  imagename:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  },
  message:{
    type:String,
    required:true
  }
},
{timestamps: true} 
)

module.exports=mongoose.model("s3bucket",s3Schema)




