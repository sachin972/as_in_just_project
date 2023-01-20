const express = require('express');
const app = express();
const port = 80;

app.get('/',function(req,res){
    res.sendFile(__dirname + 'views/index.html');
});

app.listen(port,()=>{
    console.log("hello");
});