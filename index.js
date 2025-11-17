const express = require("express")
const dotenv = require('dotenv').config()
const products=require('./data.js')
const app = express()

app.get('/',(req,res)=>{
    res.send('<a href="/api/products">products</a>')
})

app.get('/api/products/:ProductID',(req,res)=>{
    // fetching id from client
    const {ProductID} = req.params
    console.log(req.params);
    const newproduct=products.find((value)=>value.id===Number(ProductID))
    res.send(newproduct)
})

app.listen(process.env.PORT,()=>{
    console.log("server running")
})

