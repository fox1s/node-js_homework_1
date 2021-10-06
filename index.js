const http = require('http');

const port = '8000';
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html')
    res.write(`
        <html>
            <head><title>Homework 1</title></head>
            <body>
                <h1>Hello world =)</h1>
            </body>
        </html>
    `)
    res.end();
})

server.listen(port, hostname, () => {
    console.info(`Server running at http://${hostname}:${port}`)
});
