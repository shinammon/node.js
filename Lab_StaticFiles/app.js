var express = require("express");
var app = express();


// app.use(express.static(__dirname + "/image"));

// var server = app.listen(3000,function(){
//     console.log("Node server is running");
// })

app.use(express.static("./files"));
app.use(express.static('image'));
app.use(express.static('css'))
app.use(express.static('js'));

var server = app.listen(3000,function(){
     console.log("Node server is running");
});