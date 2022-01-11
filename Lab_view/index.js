var express = require("express");
var app = express();

app.set('view engine','ejs');
app.get('/',function(req,res){
    res.render('default',{
        title: 'EJS樣板測試',
        headTitle:'實作EJS',
        bodyitems:['我是一','我是二','我是三','我是四','我是五',],
        footNote: '@2020 Copyright'
    });
});

var server = app.listen(3000,function(){
    console.log("Node server is running");
});