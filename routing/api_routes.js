const express = require("express");
const bodyParser = require("body-parser");
const app = express();

module.exports = function(app) {
app.post('../app/data/friends.js',function(req,res){
  var user_name='this_is_a';
  var password='test';
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});
}