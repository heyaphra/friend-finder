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

  let diff = 0;
  let comparisons = [];
  let match;
  
  //iterate through friends.js and user's post, compare scores
  for(let i = 0; i < Object.keys(req.body.scores).length - 1; i++){  //length = omit user's post
    for(let j = 0; j < Object.keys(friends).length; j++){
      comparisons[i] =
        {
          name: friends[i].name,
          score: Math.abs(req.body.scores[j] - friends[i].scores[j]), //user input - all friends scores
          photo: friends[i].photo
        };
    }
}
// console.log(comparisons);

let biggest_score = 0;
//iterate through comparisions and find the best match
for(let n = 0; n < comparisons.length; n++){
  if(comparisons[n].score > biggest_score){
      biggest_score = comparisons[n].score;
      match = {
        name: comparisons[n].name,
        photo: comparisons[n].photo
      }
  }
}

// console.log(match);
res.json(match);
res.send('/', match);
});




app.listen(PORT, function(){
  console.log(`listening on http://localhost:${PORT}`)
});

