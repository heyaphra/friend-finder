const express = require('express');
const app = express();
const path = require('path');
const http = require('http')
const bodyParser = require("body-parser");
const friends = require('./app/data/friends.js').friends_db;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 8080;

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/home.html'));
});


app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

app.post('/api/friends',function(req,res){
friends.push(req.body);
});


app.listen(PORT, function(){
  console.log(`listening on http://localhost:${PORT}`)
});

