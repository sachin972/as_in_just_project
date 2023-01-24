//jshint esversion:6
const express = require('express');

// import express from 'express';
const app = express();
const port = 80;

app.use(express.static(__dirname + '/static'));



app.get('/',function(req,res){
    res.sendFile(__dirname+'/views/index.html');
    // res.send("Hello Express");
});

app.get('/json',(req,res)=>{
    var obj = {
        'message': 'Hello Json'
    };
    if(process.env.MESSAGE_INFO == 'uppercase'){
        res.send(obj.stringify().toUpperCase());
    }
    res.send(obj);
})

app.listen(port);