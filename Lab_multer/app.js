var express = require("express");
var multer = require("multer");
var app = express();
app.listen(3000);


//自定義 storage
var myStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload");    // 保存的路徑 (需先自己創建)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);  // 自定義檔案名稱
    }
});

var upload = multer({
    storage : myStorage, //設置storage
    fileFilter: function(req, file, cb){
        if(file.mimetype != 'image/gif'){
            return cb(new Error("Wrong files type"));
        }
        cb(null,true)
    } 
}) //設置檔案存放路徑

app.post('/upload_file', upload.single('myfile'),function(req,res){
    res.send("上傳成功");
})

app.get("/",function(req,res){
    res.sendfile(__dirname + '/index.html',function(err){
        if(err) res.send(404);
    });
});