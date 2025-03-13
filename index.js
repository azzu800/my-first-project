const express = require('express');
const bodyParser= require("body-parser");
const app = express()

app.get("/azzu",(req,res)=>{
    res.send("azzeezun is a bad girl")
})


app.get("/gokul",(req,res)=>{
    res.send("gokul is a good boy")
})

app.listen(3000,()=>{
    console.log("server started")
})