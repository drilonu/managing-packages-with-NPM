const { json } = require('body-parser');
var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config()

app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});






console.log("Hello World");
bGround.log("Hello World");







app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });


app.use(express.static(__dirname + "/public"));
app.use('/public', express.static(__dirname + "/public"));


app.get("/json", (req, res) => {
    res.json(
        { "message": "Hello json" }
);
});

app.get("/json", function(req, res) {
  var jsonResponse = { "message": "Hello json"};
  if (process.env.MESSAGE_STYLE === "uppercase") {
    jsonResponse.message = jsonResponse.message.toUpperCase()
  }
   res.json(jsonResponse);
});

function getTheCurrentTimeString() {
  return new Date().toString();
}

app.get("/now", function(req, res, next) {
  
  req.time = getTheCurrentTimeString();
  next(); 
}, function(req, res) {
  res.json({ time: req.time });
})























 module.exports = app;