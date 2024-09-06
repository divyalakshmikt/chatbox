const whatsappModel = require("../shared/whatsappModel")
const whatsappService = require("../services/whatsAppService")

// function Process(textUser, number){
//    textUser = textUser.toLowerCase();
//   let models=[];
//   if(textUser.includes("hello")){
//     let model = whatsappModel.messageText("Hello, what can i do for you ?.", number)
//     models.push(model)
//     }else if(textUser.includes("hi")){
//         let model = whatsappModel.messageText("Hello, what can i do for you ?..", number)
//         models.push(model)
//     }else if(textUser.includes("bye") ||
//     textUser.includes("ok") ||
//     textUser.includes("good bye") || 
//     textUser.includes("thank you") ||
//     textUser.includes("leaving") ){
//         let model = whatsappModel.messageText("Hello, thank u for contacting us.", number)
//         models.push(model)
//     }else{
//         let model = whatsappModel.messageText("Sorry, iam unable to understand you. ", number)
//         models.push(model)
//     }


// models.forEach(model => {
//     whatsappService.SendMessageToWhatsApp(model)
// });

// }



// ==============my coding===================

function Process(textUser, number){
    textUser = textUser.toLowerCase();
   let models=[];
   if(textUser.includes("hello") || textUser.includes("hi") || textUser.includes("help") || textUser.includes("taxi")){
     let model = whatsappModel.messageText("Thank you for contacting us. Please share your pick up location", number)
     models.push(model)
     }
    //  else if(textUser.includes("hi")){
    //      let model = whatsappModel.messageText("Hello, what can i do for you ?..", number)
    //      models.push(model)
    //  }
     else if(textUser.includes("bye") ||
     textUser.includes("ok") ||
     textUser.includes("good bye") || 
     textUser.includes("thank you") ||
     textUser.includes("leaving") ){
         let model = whatsappModel.messageText("Hello, thank u for contacting us.", number)
         models.push(model)
     }else{
         let model = whatsappModel.messageText("Sorry, iam unable to understand you. ", number)
         models.push(model)
     }
 
 
 models.forEach(model => {
     whatsappService.SendMessageToWhatsApp(model)
 });
 
 }



module.exports={
    Process
}
