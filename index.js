const express = require('express');
const app = express();
const port = 80;

app.get('/',function(req,res){
    // res.sendFile(__dirname+'/index.html');
    res.send("Hello Express");
});

app.listen(port,()=>{
    console.log("hello");
});