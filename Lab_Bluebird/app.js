var express = require("express");
//var Promise = require("bluebird");
var fs = require("fs");
var mysql = require("mysql");
const Bluebird = require("bluebird");

const conn = mysql.createConnection({
    user:"root",
    password: "root",
    host: "localhost",
    database:"mask"
})

conn.on("error",(event)=>{
    console.log(event);
})

conn.connect();
Bluebird.promisifyAll(conn)

app.post("/",(req,res)=>{
    const sql1 = "SELECT * FROM inventory WHERE id = 3";
    const sql2 = "SELECT * FROM inventory WhERE adult_mask > 500";
    conn.queryAsync(sql1)
        .then(result =>{
            //取得第一個結果
            return conn.queryAsync(sql2);
        })
        .then(result2 =>{
            //取得第二個結果
        })
})
// Promise.promisifyAll(fs);
// fs.readFileAsync(__dirname+'sample.txt')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));