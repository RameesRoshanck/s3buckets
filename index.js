require('dotenv').config()
const express = require('express')
const cors = require('cors')
const ConnectDB=require("./Config/Connection")

const app = express()

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())
ConnectDB()


const PORT=process.env.PORT

app.use("/api",require('./Routes/s3Routes'))

app.listen(PORT,()=>{
    console.log('local host connect',PORT);
})