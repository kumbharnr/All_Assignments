var http = require('http');

http.createServer( function (request,response){
    response.write("abcd");
    response.end();

}).listen(8081);
console.log("server is listening at http://localhost:8081");