var express = require("express");
var mysql = require("mysql");
var app = express();
app.listen(3000);
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  
});

conn.connect(function (err) {
  if (err) {
    console.log(JSON.stringify(err));
    return;
  }
});

const databaseName = "labdb";
conn.query(`CREATE DATABASE IF NOT EXISTS ${databaseName};`, function (err) {
  if (err) {
    console.log(JSON.stringify(err));
    return;
  }
});

conn.query(`USE ${databaseName}`, "", function (err) {
  if (err) {
    console.log(JSON.stringify(err));
    return;
  }
});

const tableName = "news";
const addTableSQL = `CREATE TABLE IF NOT EXISTS ${tableName} (
    newsId INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    ymd Date NOT NULL,\
    PRIMARY KEY ( newsId )
    )ENGINE=InnoDB DEFAULT CHARSET=utf8`;

conn.query(addTableSQL, "", function (err) {
  if (err) {
    console.log(JSON.stringify(err));
    return;
  }
});

const insertNewsSQL = `INSERT INTO ${tableName}(title,ymd)\ VALUES("play with node js","2022-1-11")`;
conn.query(insertNewsSQL,function(err){
    if(err){
        console.log(JSON.stringify(err));
        return;
    }
    process.exit(0);
});


