const express= require("express");
const app = express();
const categoryRout = require("./routes/categoryRout")
require("dotenv").config();
app.use(express.static("./public"))
const cors = require("cors");
app.use(cors())
app.use(express.json());



app.use("/api", categoryRout);


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("server on port" + PORT);
})