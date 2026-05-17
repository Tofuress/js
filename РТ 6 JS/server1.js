const http = require('http');

const server = http.createServer((req, res) => {

    console.log('получен новый запрос');

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    res.end('добро пожаловать на сервер');
});

server.listen(8080, () => {
    console.log('сервер запущен на http://localhost:8080');
});