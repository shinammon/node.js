var express = require("express");
var querystring = require("querystring");
var app = express();
app.listen(3000);
var myScore;

// app.get('/setscore',function(req,res){
//     var qstr = req.url.replace("/setscore?","");
//     var myScore = querystring.parse(qstr);
//     console.log("原始 Query = \n" + qstr + "\n解析 Object");
//     console.log(myScore);
//     res.send(myScore);
// });

app.get('/getfix',function(req,res){
    myScore.math = 90;
    myScore.english = 80;
    var fixQS = querystring.stringify(myScore);
    res.send(fixQS);
})

app.get("/show",function(req,res){
    res.send(myScore);
})

app.get('/setscore',function(req,res){
    var qstr = req.url.replace("/setscore?","");
    myScore = querystring.parse(qstr);
    console.log("原始 Query = \n" + qstr + "\n解析 Object");
    console.log(myScore);
    res.send(myScore);
})