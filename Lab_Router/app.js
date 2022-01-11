var  express = require("express");
var app = express();
var router = require("./router");
app.listen(3000);

app.use(function(req,res,next){
    console.log("Time" + Date());
    next();
})

app.use('/apple',function(req,res,next){
    console.log("有人在使用模組");
    next();
})

app.use('/apple',router);