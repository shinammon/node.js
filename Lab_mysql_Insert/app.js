var express = require("express");
var bodyParser = require("body-parser");
var db = require("./db");
var {Success , Error} =require("./response");
var app = express();
app.listen(3000);

//解析json資料
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('index')
})

app.get('/success',function(req,res){
    res.end(
        JSON.stringify(new Success('success'))
    )
})

app.get('/error',function(req,res){
    res.end(
        JSON.stringify(new Error('error'))
    )
})

app.post('/add',function(req,res){
    var body = req.body;
    var sql = 'INSERT INTO news(title , account , password) VALUES (? ,?,?);'
    var data = [body.title , body.account, body.password];
    db.exec(sql,data,function(result,fields){
        if(result.insertId){
            res.end(
                JSON.stringify(new Success('insert success'))
            )
        }else{
            res.end(
                JSON.stringify(new Error('insert error'))
            )
        }
    })

})