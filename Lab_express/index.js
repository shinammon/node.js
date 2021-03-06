var express = require("express");
var app = express();

app.get('/',function(req,res){
    res.send('Express is fun');
})

var router = express.Router();

router.get('/data',function(req,res){
    res.json({
        name:'財團法人資訊工業策進會',
        website:'https://www.iii.org.tw/',
        address: '台北市大安區和平東路二段',
        tel: '02-6632-8168'
    })
})

app.use('/',router);

app.listen(3000,function(){
    console.log('Example app listening on port 3000!')
})