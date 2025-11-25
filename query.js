const express = require('express')
const app = express()
const dotenv = require('dotenv').config()

app.get('/search',(req,res)=>{
    const keyword = req.query.keyword

    // req.query holds all query parameters
   
    if(!keyword){
      return  res.send('Enter a keyword')
    }
    else{
      return  res.send(`You searched for "${keyword}" `)
    }
})

app.listen(process.env.PORT,()=>{
    console.log('server running in', process.env.PORT);
    

})