const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/favicon.ico') {
        res.statusCode = 204;
        return res.end();
    }

    if (req.url === '/api/users') {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');

        return res.end(JSON.stringify({
            users: ['Иван', 'Мария', 'Алексей']
        }));
    }

    if (req.url === '/status') {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');

        return res.end(
            `сервер работает, время: ${new Date().toLocaleTimeString()}`
        );
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    res.end('страница не найдена');
});

server.listen(3000, () => {
    console.log('сервер запущен');
});