const verifyToken =(req,res)=>{
    try {
        let accessToken= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"]
        if(challenge != null && token != null && token== accessToken){
            res.send(challenge)
        }else{
            res.status(400).send()
        }

    } catch (error) {
        res.status(400).send()
    }
}

const RecivedMessage =(req,res)=>{
    res.send("Hello Recieved")
}





module.exports={
    verifyToken,
    RecivedMessage
}