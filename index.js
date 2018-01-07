var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf8', function (err, data){
            response.statusCode = 200;
            response.write(data);
            response.end();
        });
    } else if (request.method === 'GET' && request.url === '/404') {
        fs.readFile('./logo_blue.png', function (err, data){
            response.statusCode = 404;
            response.setHeader("Content-Type", "image/png; charset=utf-8");
            response.write(data);
            response.end();
        });
    } else {
        fs.readFile('./404.html', 'utf8', function (err, data){
            response.statusCode = 404;
            response.write(data);
            response.end();
        })
    }
});
server.listen(9000);