const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"))

const whatsappService = require("../services/whatsAppService")

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
    try {
        let entry= (req.body["entry"])[0];       
        let changes = (entry["changes"])[0];       
        let value = changes["value"];
        let messageObject = value["messages"];

        if(typeof messageObject != "undefined"){
            let messages = messageObject[0];
            let number = messages["from"]

            let text = GetTextUser(messages)
            
            console.log("----text ------:", text);
            // console.log("-----messageObject-----:",messageObject);
        
            // call the service
            // whatsappService.SendMessageToWhatsApp(text, number)
        }
       
       

        res.send("EVENT_RECEIVED");
    } catch (error) {
        myConsole.log(error)
        res.send("EVENT_RECEIVED");
    }
}


function GetTextUser(messages){
    let text =""
    let typeMessage = messages["type"];
    if(typeMessage== "text"){
        text = (messages["text"])[body];

    }else if(typeMessage=="interactive"){
        let interactiveObject = messages["interactive"];
        let typeInteractive = interactiveObject["type"];

        console.log("------interactiveObject----:",interactiveObject);
         
        if(typeInteractive == "button_reply"){
            text = (interactiveObject["button_reply"])["title"]

        }else if(typeInteractive == "list_reply"){
            text = (interactiveObject["list_reply"])["title"]
        }else{
            console.log("---No Messagess-----");
        }



    }else{
        console.log("---No Messagess-----");
    }

    return text
}


module.exports={
    verifyToken,
    RecivedMessage
}