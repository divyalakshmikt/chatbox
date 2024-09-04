function sampleText(textResponse,number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "text",
        "text": {
            "body": textResponse
        },
       
    });

    return data
}

function sampleImage(number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "image",
        "image": {
           "link": "https://i.postimg.cc/fyrm0kcn/testimonial3.png"
        },
       
    });

    return data
}



function sampleAudio(number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "audio",
        "audio": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3"

        },
       
    });

    return data
}

function sampleVideo(number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "video",
        "video": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4",
        },
       
    });

    return data
}

function sampleDocument(number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "document",
        "document": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf",
        },
       
    });

    return data
}


function sampleButton(number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "header":{
                "type":"image",
                "image":{
                    "link":"https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/image_whatsapp.png"
                }
            },
            "body": {
                "text": "Do you Confirm ?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "👍 Yes"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": "👎 No"
                        }
                    }
                ]
            }
        }
       
    });

    return data
}


function sampleList(number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
        
            "body": {
                "text": "Sample List"
            },
            "footer": {
                "text": "Please select the list options"
            },
            "action": {
                "button": "Select one",
                "sections": [
                    {
                        "title": "First one",
                        "rows": [
                            {
                                "id": "main-computer",
                                "title": "Computer",
                                "description": "Very good Department"
                            },
                            {
                                "id": "second-computer",
                                "title": "Computer-2",
                                "description": "Second year department"
                            }
                        ]
                    },
                    {
                        "title": "Electronics",
                        "rows": [
                            {
                                "id": "EC-1",
                                "title": "Theory of dynamics",
                                "description": "newtons thory"
                            },
                            {
                                "id": "EC-2",
                                "title": "THoery of Airospace",
                                "description": "Nasa aiero space thoery"
                            }
                        ]
                    }
                ]
            }
        }
       
    });

    return data
}


function sampleLocation(number){
    const data =JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "location",
        "location": {
            "latitude": "11.248179512300455",
            "longitude": "75.7876054100092",
            "name": "Tali Maha Shiva Kshetram",
            "address": "Tali Road near Zamorins school, PO chalappuram, Palayam, Kozhikode, Kerala 673002"
        }
       
    });

    return data
}





module.exports={
    sampleText,
    sampleImage,
    sampleAudio,
    sampleVideo,
    sampleDocument,
    sampleButton,
    sampleList,
    sampleLocation,
}
