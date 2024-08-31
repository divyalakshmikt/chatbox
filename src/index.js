const express = require("express");
const apiRoute = require("./routes/routes")

const app = express();

const PORT= process.env.PORT || 3000;

app.use(express.json());
app.use("/whatsup", apiRoute);


app.listen(PORT, () =>{
    console.log("server is running at port:", + PORT)
});