const { error } = require("console");
const http = require("https");

function SendMessageToWhatsApp(textResponse, number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "text",
        "text": {
            "body": textResponse
        }
    });

    let options ={
        host:"graph.facebook.com",
        path:"/v13.0/403888939475836/messages",
        method:"POST",
        body:data,
        headers:{
            "Content-Type":"application/json",
            Authorization:"Bearer EAAL6fZB8MBzEBOZB5ADMYN03o0hxfINZCGRaUQZCtcgj8dVzLe4lNQfX64DXVJL9Hj8fZCbnvbwP9bXt410Be1ACskG0y21Il39TyCbuFOmZA6ZCLhHh3jNYUq1BKDx0BTbplrLohywME8vBIJlvXV01IVwb2UbjZC4JZCpdSieX9m8aJaLAkYp8bMdvcTqwvZBh1HtXctagGPjmpWbCHPSXwZD"
        }
    };

    const req = http.request(options,res=>{
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