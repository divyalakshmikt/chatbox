const express= require("express");
const router = express.Router();
const whatsUpController = require("../controllers/whatsupController")

router
.get("/",  whatsUpController.verifyToken)
.post("/", whatsUpController.RecivedMessage)


module.exports=router;