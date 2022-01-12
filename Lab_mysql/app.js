var express = require("express");
var mysql = require("mysql");
var app = express();
app.listen(3000);
app.set('view engine','ejs');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'mask',
    multipleStatements:true
});

conn.connect(function(err){
    if(err){
        console.log("連線失敗");
        return;
    }
    console.log("連線成功")
});

app.get('/page/:page([0-9]+)',function(req,res){
    var page = req.params.page;
    if(page <= 0 ){
        res.redirect('/page/1');
        return;
    }
    var nums_per_page = 5;
    var offset = (page -1 ) *  nums_per_page;
    var sql = `SELECT * FROM inventory LIMIT ${offset}, ${nums_per_page};
                SELECT COUNT(*) AS COUNT FROM inventory;`
    conn.query(sql,function(err,data){
        if(err){
            console.log(err);
        }
        var last_page = Math.ceil(data[1][0].COUNT / nums_per_page);
        if(page > last_page){
            res.redirect('/page/'+ last_page);
            return;
        }
        res.render('page',{
            data:data[0],
            curr_page:page,
            total_nums: data[1][0].COUNT,
            last_page:last_page
        })
    });      
})