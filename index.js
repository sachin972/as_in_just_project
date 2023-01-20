const express = require('express');
const app = express();
const port = 80;

app.get('/',function(erq,res){
    res.send('Hello Express');
});

app.listen(port,()=>{
    console.log("hello");
});