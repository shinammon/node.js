var mysql = require("mysql");
var conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root'
})

conn.connect(function(err){
    if(err){
        console.log(JSON.stringify(err));
        return;
    }
});

