var http = require('http');
var express = require('express');
var body = require('body-parser');
var router = require('./router');
var app= express();

app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use('/', router)

 app.listen("3000",function(){
    console.log('running now on port 3000'); 
}); 

module.exports = app ;
