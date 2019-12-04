const path = require('path');
var http = require("http");
const mongoose = require('mongoose');
const express = require('express');
var app = express();

mongoose.connect('mongodb://localhost:3000/Baits', {useNewUrlParser: true});

let db = mongoose.connection;

db.once('open', () =>{
    console.log('Connected to Mongodb');
  });
  
  //check for db errors
  db.on('error', (err) => {
    console.log(err);
  });

var BaitSchema = mongoose.Schema({
    "name": String,
    "description": String
});

var Bait = mongoose.model("Soft Plastics", BaitSchema);

app.post("/baits", (req, res) =>{
    var newBait = new Bait({
        "title": req.body.created,
        "description": req.body.description
    });
    newBait.save((error, result) => {
        if(error !== null){
            console.log(error);
            res.send("error reported");
        }
        else{
            Bait.find({}, (error, result) =>{
                res.json(result);
            })
        }
    });
});

app.get("/baits.json",(req,res)=>{
    Bait.find({}, (error, baits)=>{
        res.json(baits);
    });
});

const publicDir = path.join(__dirname, '../Website');



app.use(express.static(publicDir));

app.listen(3030, () =>{
    console.log('server running on port 3030');
});