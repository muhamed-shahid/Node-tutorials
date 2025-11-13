const express = require("express")
const dotenv = require('dotenv').config()
const products=require('./data.js')
const app = express()

app.get('/',(req,res)=>{
    res.json(products)
})

app.listen(process.env.PORT,()=>{
    console.log("server running")
})

