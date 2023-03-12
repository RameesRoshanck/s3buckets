
const { S3Client,PutObjectCommand } = require("@aws-sdk/client-s3");
const crypto=require('crypto')
const sharp = require('sharp');
const s3Model =require('../Models/s3Model')


const randomImageName=(bytes=32)=>crypto.randomBytes(bytes).toString('hex')

const bucketName=process.env.BUCKET_NAME
const bucketRegion=process.env.BUCKET_REGION
const accessKey=process.env.ACCESSS_KEY
const secretAccessKey=process.env.SECRET_ACCESS_KEY

const s3=new S3Client({
  credentials:{
    accessKeyId:accessKey,
    secretAccessKey:secretAccessKey
  },
  region:bucketRegion
})






const addpost=async(req,res)=>{
  console.log(req.body,'req.body')
  console.log(req.file,'+++++++++');
  try{
     
  const buffer=await sharp(req.file.buffer).resize({heigth:1920,width:1080,fit:"contain"}).toBuffer()
   
    let imageName=randomImageName()
    const params={
      Bucket:bucketName,
      Key:imageName,
      Body:buffer,
      ContentType:req.file.mimetype,
  }
  const comment=new PutObjectCommand(params)
  await s3.send(comment)
  
  const post=await s3Model.create({
    message:req.body.message,
    imagename:req.body.imgname,
    image:imageName
  })
   console.log(post,'successfully created')
   res.json(post)
  }catch(error){
    console.log(error,'addpost');
  }
}




const test=(req,res)=>{
  res.send("hai")
}

module.exports={
    test,
    addpost
}