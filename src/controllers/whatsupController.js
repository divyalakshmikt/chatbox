const verifyToken =(req,res)=>{
    res.send("Hello Verify token")
}

const RecivedMessage =(req,res)=>{
    res.send("Hello Recieved")
}





module.exports={
    verifyToken,
    RecivedMessage
}