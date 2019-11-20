const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const express = require('express');

const publicDir = path.join(__dirname, '../Website');

var app = express();

app.use(express.static(publicDir));

app.listen(3030, () =>{
    console.log('server running on port 3030');
});