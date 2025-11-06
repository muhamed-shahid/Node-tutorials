const express = require("express")
const dotenv = require('dotenv').config()
const app = express()

app.listen(process.env.PORT,()=>{
    console.log("server running")
})

app.get('/',(req,res)=>{
    res.send("welcome all")
})