var http=require('http');
var fs=require('fs');
//This helps to create web server
http.createServer(function(req,res){  
//request(data coming from user (browser)),response(What u send back to user)
//Runs this function every time someone visits your site
fs.readFile('test.html',function(err,data){
    res.writeHead(200,{'Content-Type':'text/html'});//200-status is OK  everything worked
    // 'Content-Type':'text/html'-this tells “I’m sending HTML content”
    res.write (data);
    return res.end();
    //res.end('hello,World!');
    //This sends the actual content and ends the response
    // without( res.end) browser keeps loading forever
})
    
}).listen(5000);//This tells server: “Start listening on port 5000”