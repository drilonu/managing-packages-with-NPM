var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config()








console.log("Hello World");
bGround.log("Hello World");







// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/views/index.html");
//   });


// app.use(express.static(__dirname + "/public"));
// app.use('/public', express.static(__dirname + "/public"));


// app.get("/json", (req, res) => {
//     res.json(
//         { "message": "Hello json" }
// );
// });

app.get("/json", function(req, res) {
  console.log(process.env.MESSAGE_STYLE, " <= message style");
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json(
      { "mesage": "HELLO JSON"}
    )
  } else {
    res.json(
      { "mesage": "Hello json"}
    )
  }
});























 module.exports = app;