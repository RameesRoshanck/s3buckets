const multer  = require('multer')

const storage=multer.memoryStorage()
const upload=multer({storage:storage})

module.exports=upload

// const multer=require("multer")

// const fileStorageEngin=multer.diskStorage({
//     destination:(req,file,cb)=>{
//       cb(null,"./public/product-images")
      
//     },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now()+"--"+file.originalname);
//     }
// })

// module.exports=multer({storage:fileStorageEngin})
// router.post('/addCatagory',multer.array('image',1),postCatagory)
// s3-buckets-demo
// s3-buckets-access