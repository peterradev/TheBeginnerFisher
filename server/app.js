const express = require('express');
const bodyparser = require('body-parser');
const mongo = require('mongodb').MongoClient;
const object = require('mongodb').ObjectId;
const CONNECTION_URL = "mongodb+srv://SeaRhino:<Wrestle100>@cluster0-hrqns.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "Baits";

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
var database, collection;
app.listen(3030, ()=>{
    mongo.connect(CONNECTION_URL, {useNewUrlParser: true}, (error, client) => {
        if(error){
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("Soft Plastics");
        console.log("Connected to " + DATABASE_NAME + "!");
    });
});

app.post("/Soft Plastics", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});