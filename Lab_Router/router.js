var express = require("express");
var router = express.Router();

router.get('/',function(req,res){
    res.send('homepage');
})
router.get('/today',function(req,res){
    res.send('One apple a day');
})
router.get('/doctor',function(req,res){
    res.send('no doctor')
})

module.exports = router;