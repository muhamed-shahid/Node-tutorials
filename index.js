const express = require("express")
const dotenv = require('dotenv').config()
const products=require('./data.js')
const logger=require('./logger.js')
const authorize=require('./authorize.js')
const app = express()



app.use(express.json())


app.post('/',(req,res)=>{
    console.log(req.body);
    
    res.send("POSTED")
})
app.get('/',(req,res)=>{
    res.send("HOME PAGEEE")

})


app.get('/about',(req,res)=>{
    res.send("About page")
})
app.listen(process.env.PORT,()=>{
    console.log("server running")
})

