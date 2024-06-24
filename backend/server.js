const express = require('express')
const cors = require("cors")
const dbconnect = require("./dbconnect")

dbconnect();

const app = express()
app.use(cors())



app.listen(5000,()=>{
    console.log("server is renning at port 5000")
})