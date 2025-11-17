const express = require("express")
const dotenv = require('dotenv').config()
const products=require('./data.js')
const app = express()

app.get('/',(req,res)=>{
    res.send('<a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    const newproduct=products.map((value)=>{
const{id,name}=value
        return{
            id,name
        }
    })
    res.send(newproduct)
})

app.listen(process.env.PORT,()=>{
    console.log("server running")
})

