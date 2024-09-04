const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"))

const whatsappService = require("../services/whatsAppService")
const SampleModel =  require("../shared/sampleModels")


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

const RecivedMessage = async(req,res)=>{
    try {
        let entry= (req.body["entry"])[0];       
        let changes = (entry["changes"])[0];       
        let value = changes["value"];
        let messageObject = value["messages"];

        console.log("---body ---:", messageObject);

        if(typeof messageObject != "undefined"){
            let messages = messageObject[0];
            let number = messages["from"]

            let text =  GetTextUser(messages)
            
            // console.log("----text ------:", text);
            // console.log("-----messageObject-----:",messageObject);
        
            // // call the service
            // whatsappService.SendMessageToWhatsApp("hi divya  ..:" + text, number)
       
            // call the sample model

            if(text=="text"){
                let data= SampleModel.sampleText("Hi Your msg  ..:" + text, number)
                whatsappService.SendMessageToWhatsApp(data)
            }else if(text=="image"){
                let data= SampleModel.sampleImage(number)
                whatsappService.SendMessageToWhatsApp(data)
            }else if(text=="audio"){
                let data= SampleModel.sampleAudio(number)
                whatsappService.SendMessageToWhatsApp(data)
            }else if(text=="video"){
                let data= SampleModel.sampleVideo(number)
                whatsappService.SendMessageToWhatsApp(data)
            }else if(text=="document"){
                let data= SampleModel.sampleDocument(number)
                whatsappService.SendMessageToWhatsApp(data)
            }else if(text=="button"){
                let data= SampleModel.sampleButton(number)
                whatsappService.SendMessageToWhatsApp(data)
            }else if(text=="list"){
                let data= SampleModel.sampleList(number)
                whatsappService.SendMessageToWhatsApp(data)
            }else if(text=="location"){
                let data= SampleModel.sampleLocation(number)
                whatsappService.SendMessageToWhatsApp(data)
            }else{
                let data= SampleModel.sampleText("Hi, No msg ..:", number)
                whatsappService.SendMessageToWhatsApp(data)
            }
       
       
       
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
        text = (messages["text"])["body"];

    }else if(typeMessage=="interactive"){
        
        let interactiveObject = messages["interactive"];
        let typeInteractive = interactiveObject["type"];
         
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