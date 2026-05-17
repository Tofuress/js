const http = require('http');

const server = http.createServer((req, res) => {

    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    const html = `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <title>сайт</title>
    </head>
    <body>

        <header>
            <h1>сайт</h1>
            <hr>
        </header>

        <main>
            <h2>Главная страница</h2>

            <p>
                добро пожаловать на сервер node.js
            </p>
        </main>

    </body>
    </html>
    `;

    res.end(html);
});

server.listen(3000, () => {
    console.log('Сервер запущен');
});
// http://localhost:3000