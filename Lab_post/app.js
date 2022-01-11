var express = require("express");
var app = express();
app.listen(3000);

app.get('/',function(req,res){
    res.sendfile(__dirname + '/index.html', function(err){
        if(err) res.send(404);
    });
})

const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded();

app.post('/postdata', urlencodedParser,function(req,res){
    console.log(req.body);
    res.send('收到的資料 = ' + JSON.stringify(req.body));
})