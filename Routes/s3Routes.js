const express=require('express')
const { test, addpost } = require('../Controller/s3Controllers')
const upload = require('../middleware/mutlter')
const router=express.Router()


router.get("/",test)
router.post("/addpost",upload.single('file'),addpost)


module.exports= router