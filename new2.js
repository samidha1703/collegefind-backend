var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer(function(req,res){
    var inUrl=url.parse(req.url,true);
    var filename="." + inUrl.pathname;
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{'content-type':'text/html'});
            return res.end('404 Not found');
        }
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(5000);