var express  = require("express");
var session = require('express-session')
var FileStore = require('session-file-store')(session);
var app = express();
app.listen(3000);

app.use(session({
    secret : 'asdoijisjdfiogjfdiogjdfoi',
    resave : false,
    saveUninitialized : false,
    store : new FileStore({
        //指定file儲存的位置
        path : __dirname + '/sessions'
    }),
    cookie:{
        path: '/',
        httpOnly : true,
        secure : false,
        maxAge : 60*1000
    }
}));

app.get('/',function(req,res){
    res.setHeader('Content-Type','text/html; charset = utf-8')
    //req.session.views = req.session.cookie;
    if(req.session.views){
        req.session.views++
        res.write('<p>瀏覽次數:' + req.session.views+ '</p>')
        res.end()
    }else{
        req.session.views= 1;
        res.end('這是您第一次訪問!')
    }
})