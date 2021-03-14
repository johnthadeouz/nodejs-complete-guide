const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
    <head><title>My first page</title></title>
    <body><h1>Hello from my node.js server!</h1></body>
    </html>`);
    res.end();
});

server.listen(3000);
