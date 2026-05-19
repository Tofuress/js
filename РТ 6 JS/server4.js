const http = require('http');

let tasks = [
    'изучить Node.js',
    'создать сервер',
    'сделать проект'
];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    if (req.url === '/api/tasks') {
        if (req.method === 'GET') {
            res.statusCode = 200;
            return res.end(JSON.stringify({ tasks }));
        }
        if (req.method === 'POST') {
            tasks.push('новая задача');
            res.statusCode = 201;
            return res.end(JSON.stringify({message: 'задача добавлена', tasks}));
        }

        if (req.method === 'DELETE') {
            const deletedTask = tasks.pop();
            res.statusCode = 200;
            return res.end(JSON.stringify({message: 'последняя задача удалена', deletedTask, tasks}));
        }

        if (req.method === 'PUT') {
            res.statusCode = 501;
            return res.end(JSON.stringify({error: 'метод PUT не реализован'}));
        }
        res.statusCode = 405;
        return res.end(JSON.stringify({error: 'метод не поддерживается'}));
    }
    if (req.url === '/api/tasks/count' && req.method === 'GET') {
        res.statusCode = 200;
        return res.end(JSON.stringify({count: tasks.length}));
    }
    res.statusCode = 404;
    res.end(JSON.stringify({error: 'маршрут не найден'}));
});

server.listen(3000, () => {
    console.log('сервер запущен');
});