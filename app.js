const express = require("express");
// const db = require("./db.json")
const bodyParser = require("body-parser");
const app = express();
// const password = "brksbs5620";
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://Burak:${password}@nodeex.5uf56wr.mongodb.net/?retryWrites=true&w=majority`;
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);ü
const db = require("./db");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.send("hid")
})
app.post("/posts/:id/:name/:age",(req,res)=>{
    const {id,name,age}= req.params
    res.send(`gönderilen id ${id} ${name} ${age}`)
})
app.listen(process.env.PORT || 3001,()=>{
    console.log("sunucu ayakta")
} )