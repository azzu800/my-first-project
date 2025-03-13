const express = require('express');
const bodyParser= require("body-parser");
const app = express()

app.get("/azzu",(req,res)=>{
    res.send("azzeezun is a bad girl")
})


app.listen(3000,()=>{
    console.log("server started")
})