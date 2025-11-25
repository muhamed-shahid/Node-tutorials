const authorize=(req,res,next)=>{
    console.log("middlewareee");
    next()
    
}

module.exports=authorize