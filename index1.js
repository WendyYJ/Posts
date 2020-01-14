var express = require('express');
var bodyPaser = require('body-parser');
var app = express();
require('dotenv').config();
var bodyParser = bodyPaser.json();

var time  = (req,res,next) => {
    req.time = new Date();
    next();
}

function checklogin (req,res,next) {
    req.test = "login_information";
    next();
}
app.use(time);
//app.use(checklogin);

app.post('/login',bodyParser,(req,res) => {
    console.log("**************");
    console.log(req.body);
    var date = new Date();
    var body = req.body;
    console.log(body.password);
    res.setHeader('X-Time','text/html');
    res.send(body.name);
    res.end();
});

app.post('/greeting',checklogin,(req,res) => {
   // res.send(req.test);
    res.send(req.time);
});

app.listen(process.env.port);