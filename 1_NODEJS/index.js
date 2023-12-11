var http = require("http");

http.createServer(function (request, reponse) {
    reponse.writeHead(200, {'content-Type': 'text/plain'});

    reponse.end('Hello World -7376222192 -MANIKANDAN G\n');
}).listen(3100);

console.log('server running at http://127.0.0.1:3100/');
