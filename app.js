const express = require("express");
// const db = require("./db.json")
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("hi")
})
app.post("/posts/:id",(req,res)=>{
    const id = req.body
    res.send(`gönderilen id ${id}`)
})
app.listen(process.env.PORT || 3001,()=>{
    console.log("sunucu ayakta")
} )