const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`[${new Date().toLocaleTimeString()}]`);
    console.log(`URL: ${req.url}`);
    console.log(`Метод: ${req.method}`);
    console.log(`User-Agent: ${req.headers['user-agent']}`);
    if (req.url === '/admin') {
        console.log('запрос к админ-панели');
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('запрос обработан');
});

server.listen(3000, () => {
    console.log('сервер запущен');
});