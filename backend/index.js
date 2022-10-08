const express = require("express")
const {MongoClient} = require("mongodb")
const app = express()
let db

//Get server and display allaAnnonser in the console. 
app.get("/", async (req, res) => {
    const allaAnnonser = await db.collection("ads").find().toArray()
    console.log(allaAnnonser)
    res.send(`${allaAnnonser.map(ads => `<p>${ads.mat}</p>`)}`)
})

app.get("/annonser", async (req, res) => {
    const allaAnnonser = await db.collection("ads").find().toArray()
    res.json(allaAnnonser)
})

async function start() {
    const client = new MongoClient("mongodb://root:root@localhost:27017/SmartWaste?&authSource=admin")
    await client.connect()
    db = client.db()
    app.listen(3005, ()=> {
        console.log("On Port 3005")
    })
}
start()
