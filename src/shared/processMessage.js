let moment = require("moment"); // date

const whatsappModel = require("../shared/whatsappModel")
const whatsappService = require("../services/whatsAppService")

const RiderQuey = require("../Query/rider");
const BookingsQuery = require("../Query/bookings")

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

async function Process(textUser, number, name,messages){
    textUser = textUser.toLowerCase();
    let models=[];
    let query_builder;

   if(textUser.includes("hello") || textUser.includes("hi") || textUser.includes("help") || textUser.includes("taxi")){

     let model = whatsappModel.messageText("Thank you for contacting us. Please share your pick up location", number)
     models.push(model)

     // add values to rider table
    query_builder = {
        Phone:number,
        Name:name,
        Status:1
    }
    let rider_result =await RiderQuey.create(query_builder);
     console.log("-------rider_result.insertId--------:",rider_result.insertId);

    // add values to bookings table
    query_builder = {
        rider_id:rider_result.insertId,
        Status:1,
        created_at:moment().format('MMMM Do yyyy, h:mm:ss a')
    }

    await BookingsQuery.create(query_builder)


     }else if(textUser.includes("location")){

         // get rider Details
         query_builder={
            columns: {RiderID,Rider_name},
            where:{
                Phone:number,
                Status:1
            }
        }

        let rider_details= await RiderQuey.getOne(query_builder)

        console.log("-------rider_details-----:",rider_details);

        // // get bookings Details
        // query_builder={
        //     columns: Booking_id,
        //     where:{
        //         rider_id:
        //     }
        // }
            // add values to bookings table
        // query_builder = {
        //     // pickup_location_address :
        //     // pickup_location_latitude  = Bookings.pickup_location_latitude;
        //     // pickup_location_longitude  = Bookings.pickup_location_longitude;
        //     // pickup_location_name   = Bookings.pickup_location_name;
        //     // pickup_location_url  = Bookings.pickup_location_url,
        // }

        // await BookingsQuery.create(query_builder)


         let model = whatsappModel.messageText("Please share the Drop-off location .", number)
         models.push(model)

     } else if(textUser.includes("bye") ||
     textUser.includes("ok") ||
     textUser.includes("good bye") || 
     textUser.includes("thank you") ||
     textUser.includes("leave") ){

         let model = whatsappModel.messageText("Hello, thank u for contacting us.", number)
         models.push(model)

     }else{

         let model = whatsappModel.messageText("Sorry, Iam unable to understand you. If you want to book a taxi online , please send 'Hi' or 'Hello' or 'Help' or 'Taxi'. I'll do my best to assist you", number)
         models.push(model)
     }
 
 
 models.forEach(model => {
     whatsappService.SendMessageToWhatsApp(model)
 });
 
 }



module.exports={
    Process
}
