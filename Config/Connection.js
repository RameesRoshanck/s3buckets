const mongoose=require('mongoose')
const URL=process.env.URL

const ConnectDB=async(req,res)=>{
    try{
      let conct=await mongoose.connect(URL)
      console.log('localhost is connect');
    }catch(error){
      console.log(error,'database connection error');
    }
}

module.exports=ConnectDB