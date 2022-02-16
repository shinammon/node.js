var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());

//白名單
const corsOption = {
    origin:[
        "https://localhost"
    ],
    methods: "GET,POST,PUT,DELETE"
};

app.use(cors(corsOption));