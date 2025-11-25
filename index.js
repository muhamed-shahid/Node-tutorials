const express = require("express")
const dotenv = require('dotenv').config()
const products=require('./data.js')
const app = express()


// Declaration of middleware in same page

const logger=(req,res,next)=>{
    console.log("middleware");
    next()
    
}

app.get('/',logger,(req,res)=>{
    res.send("HOME PAGEEE")

})


app.get('/about',logger,(req,res)=>{
    res.send("About page")
})
app.listen(process.env.PORT,()=>{
    console.log("server running")
})

