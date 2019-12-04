var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.use(express.static(__dirname+ "/Website"));

app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('monggodb://localhost/Baits', { useNewUrlParser: true });

var BaitSchema = mongoose.Schema({
    "name": String,
    "desc": String
});

var Bait = mongoose.model("Bait", BaitSchema);

http.createServer(app).listen(3030);

app.get("/baits.json", (req, res)=>{
    Bait.find({}, ()=>{
        res.json(baits);
    });
});

app.post("/baits", (req,res)=>{
    var newBait = new Bait({
        "name": req.body.name,
        "description": req.bosy.description
    });
    newBait.save((error, result)=>{
        if(error !== null){
            console.log(error);
            res.send("error reported");
        }
        else{
            Bait.find({}, (error, result)=>{
                res.json(result);
            });
        }
    });
});