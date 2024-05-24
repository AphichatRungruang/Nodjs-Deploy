const express = require(express)
const{ Pool } = require("pg")

const router = express.Router()

//Create a new Pool instance
const pool = new Pool({
    connectionString: process.env.POSTGRES_URI,
})

//Test the database connection
pool.query("SELECT 1",(err,result) =>{
    if(err){
        console.error("Error connecting to the database:",err)
    }else{
        console.log("Connected to the database")
    }
})