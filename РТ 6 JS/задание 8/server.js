const http = require('http');
const fs = require('fs/promises');
const path = require('path');

const server = http.createServer(async (req, res) => {

    try {

        const filePath = path.join(__dirname, 'index.html');

        const content = await fs.readFile(filePath, 'utf-8');

        res.statusCode = 200;

        res.setHeader('Content-Type', 'text/html; charset=utf-8');

        res.end(content);

    } catch (error) {

        res.statusCode = 500;

        res.end('ошибка сервера');
    }
});

server.listen(3000, () => {
    console.log('сервер запущен');
});