var mysql = require('mysql');

exports.exec = ( sql,data,callback ) => {
    const connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'labdb'
    });
    connection.connect();

    connection.query(sql,data,function(err,res,fields){
        if(err){
            console.log(err)
        };
        callback(res,fields);
    })
    connection.end();
}