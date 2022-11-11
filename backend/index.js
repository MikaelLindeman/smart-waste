const express = require("express")
const {MongoClient, ObjectId} = require("mongodb")
const app = express()
const cors = require("cors");
const MatModel = require ("./models/mat")
const sanitizeHTML = require('sanitize-html')

let db

//Requiered to read server
app.use(express.json())

//Connect mongoose to our mongodb server
const mongoose = require("mongoose")
mongoose.connect("mongodb://root:root@localhost:27017/SmartWaste?&authSource=admin", {
    useNewUrlParser: true
});

//Connect mongoose
const connection = mongoose.connection;
connection.once("open", function() {
  });

  //If not connected to server, show  error
  app.get("/ads", (req, res) => {
    MatModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
        
    })
  })
//Post food to newFood page 
  app.post("/newFood", async (req, res) => {
        const mat = req.body;
        const newMat = new MatModel(mat);
        await newMat.save();
        // const info = await db.collection("ads").insertOne(req.cleanupData)
        // const newFood = await db.collection("ads").findOne({_id: new ObjectId(info.insertedId)})
        res.json(mat);
  });

//     //Validation for creating food
//   function cleanupData(req, res, next ) {
//     if (typeof req.body.mat != "string") req.body.mat = ""
//     if (typeof req.body.allerg != "string") req.body.allerg = ""
//     if (typeof req.body.info != "string") req.body.info = ""
    
//     req.cleanupData = {
//         name: sanitizeHTML(req.body.name.trim(), {allowedTags: [], allowedAttributes: {}}),
//         allerg: sanitizeHTML(req.body.allerg.trim(), {allowedTags: [], allowedAttributes: {}}),
//         info: sanitizeHTML(req.body.info.trim(), {allowedTags: [], allowedAttributes: {}})

//     }

//     next()
//   }

// Cors webpage
var corsOptions = {
    origin: "http://localhost:8080"
};
app.use(cors(corsOptions));

//Get server and display allaAnnonser . 
app.get("/", async (req, res) => {
    const allaAnnonser = await db.collection("ads").find().toArray()
    res.send(`${allaAnnonser.map(ads => `<p>${ads.mat}</p>`)}`)
})
//Convert annonser to JSON
app.get("/annonser", async (req, res) => {
    const allaAnnonser = await db.collection("ads").find().toArray()
    res.json(allaAnnonser)
})

//Get the mongodb client and use port 8080 for the server
async function start() {
    const client = new MongoClient("mongodb://root:root@localhost:27017/SmartWaste?&authSource=admin")
    await client.connect()
    db = client.db()
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, ()=> {
        console.log(`listening On Port ${PORT}`)
    })
}
//Starts the server if all criteria is met
start()
