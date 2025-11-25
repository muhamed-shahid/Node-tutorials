const express = require("express")
const dotenv = require('dotenv').config()
const products=require('./data.js')
const logger=require('./logger.js')
const app = express()





app.get('/',logger,(req,res)=>{
    res.send("HOME PAGEEE")

})


app.get('/about',logger,(req,res)=>{
    res.send("About page")
})
app.listen(process.env.PORT,()=>{
    console.log("server running")
})

