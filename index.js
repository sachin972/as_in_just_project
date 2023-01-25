//jshint esversion:6
const express = require('express');

const bodyParser = require('body-parser');

// const process = require('dotenv');
// import express from 'express';
const app = express();
const port = 80;

app.use(express.static(__dirname + '/static'));



app.get('/',function(req,res){
    res.sendFile(__dirname+'/views/index.html');
    // res.send("Hello Express");
});

app.get('/json',(req,res)=>{
    console.log(req.method, req.path, req.ip);
    res.send("Okay");
});

app.get('/now',(req,res,next)=>{
    req.time = new Date().toString();
    next();
},(req,res,next)=>{
    res.send(req.time);
    next();
});

// var nvar = "";

app.get(`/:word/echo`,(req,res,next)=>{

    const obj = {
        'echo': req.params.word
    };
    res.send(obj);
});

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/name',(req,res)=>{
    res.send(`<form action="name" method="post"><input type="text" name="first" placeholder = "first"><input type="text" name = "second" placeholder = "second"><input type = "submit"></form>`);
});


app.post('/name',(req,res)=>{
    // const q = req.body.second;
    const obj = {
        'name': `${req.body.first} ${req.body.second}`
    }
    res.send(obj);
});

app.listen(port);