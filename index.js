const express = require("express")
const dotenv = require('dotenv').config()
const products=require('./data.js')
const app = express()

app.get('/',(req,res)=>{
    res.send('<a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    const newproduct=products.find((value)=>value.id==2)
    res.send(newproduct)
})

app.listen(process.env.PORT,()=>{
    console.log("server running")
})

