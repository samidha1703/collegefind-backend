var express=require('express');//importing
var app=express();//creates an express application
app.get('/test',function(req,res){
    res.send('Hello World!');
});
app.listen(5000,()=>{
    console.log('server has started!');
});