//jshint esversion:6
const express = require('express');

// import express from 'express';
const app = express();
const port = 80;

app.get('/',function(req,res){
    res.sendFile(__dirname+'/views/index.html');
    // res.send("Hello Express");
});

app.listen(port);