var express = require("express");
var mysql = require("mysql");
var app = express();
app.listen(3000);
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "labdb"
});

conn.connect(function (err) {
    if (err) {
      console.log(JSON.stringify(err));
      return;
    }
  });
  
app.get('/',function(req,res){
    res.send("Lab Datebase");
})

app.get('/home/news',function(req,res){
    conn.query('SELECT * FROM news','',function(err,rows){
        if(err){
            console.log(JSON.stringify(err));
            return;
        }
        res.send(JSON.stringify(rows));
    })
})