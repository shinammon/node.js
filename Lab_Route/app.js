var express = require("express");
var app = express();
app.listen(3000);

app.get("/welcome/:name",function(req,res){
    var name = req.params.name;
    res.send(`Welcome ${name},have a good day`);
})

app.get(/[a-z0-9]+@[a-z0-9]+.[a-z0-9]+/,function(req,res){
    res.send('your email is correct');
})