var http=require('http');
var fs=require('fs');
var url=require('url');
var addr="http://localhost:5000/default.html?name=scott"
var result=url.parse(addr,true);
console.log(result.host);
console.log(result.search);
console.log(result.pathname);