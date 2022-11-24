const express = require("express")
const {MongoClient} = require("mongodb")
const app = express()
const cors = require("cors");
const MatModel = require ("./models/mat")

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
        res.json(mat);
  });


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

//Delete request
app.delete("/ads/_id", async (req, res)=> {
    if(typeof req.params.id != "string") req.params.id =""
    db.collection("ads").deleteOne(req.params.id)
    res.send(console.log("Gone!"))
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
