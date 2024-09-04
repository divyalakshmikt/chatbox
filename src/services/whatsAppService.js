const https = require("https");

function SendMessageToWhatsApp(textResponse, number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "text": {
            "body": textResponse
        },
        "type": "text",
    });

    let options ={
        host: "graph.facebook.com",
        path: "/v13.0/403888939475836/messages",
        method: "POST",
        body: data,
        headers:{
            "Content-Type":"application/json",
            Authorization:"Bearer EAAL6fZB8MBzEBO5XEA4GwfUS0uuqlHzLHIP2KGTwuZCOSgrZCNLrQ2vIO9IG3q0RssPX8mm7y3s1NZAd9W7JbwN4YZB0ZBf0Ux5rrxUlLsodcrmel8wwgAFiaku9Su0oHDlGrIhflLZCNxVFzLFVsHVhIvj36zgN1GcrJ7EQVgkFGYCMPv7d5oPwh3zfzZCMbu50"
        }
    };

    const req = https.request(options,res=>{
        res.on("data", d=>{
            process.stdout.write(d);
        });
    });

    req.on("error", error=>{
        console.error(error);
    });


    req.write(data);
    req.end();
}









module.exports={
    SendMessageToWhatsApp,
}