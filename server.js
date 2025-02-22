const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParse = require("body-parser")
const { readdirSync } = require("fs")
const connectDB = require("./Config/db")

const app = express();

connectDB()

app.use(morgan("dev"))
app.use(cors())
app.use(bodyParse.json({}))

readdirSync("./Routes")
     .map((r)=> app.use("/api" , require("./Routes/"+r)))

app.listen(5000,()=> console.log("Server Runing port 5000"))