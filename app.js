const fs = require('fs/promises');
const path = require('path');

async function main() {
    const [, , command, ...args] = process.argv;

    try {
        switch (command) {

            case 'read': {
                const content = await fs.readFile(args[0], 'utf-8');
                console.log(content);
                break;
            }

            case 'write': {
                await fs.writeFile(args[0], args[1]);
                console.log('файл записан');
                break;
            }

            case 'copy': {
                await fs.copyFile(args[0], args[1]);
                console.log('файл скопирован');
                break;
            }

            case 'delete': {
                await fs.unlink(args[0]);
                console.log('файл удалён');
                break;
            }

            case 'info': {
                const stats = await fs.stat(args[0]);

                console.log({
                    size: stats.size,
                    created: stats.birthtime,
                    modified: stats.mtime,
                    extension: path.extname(args[0]),
                    directory: path.dirname(args[0]),
                    fileName: path.basename(args[0])
                });

                break;
            }

            case 'writejson': {
                const data = {
                    name: 'Sofia',
                    age: 18
                };

                await fs.writeFile(
                    args[0],
                    JSON.stringify(data, null, 2)
                );

                console.log('json записан');
                break;
            }

            case 'readjson': {
                const json = await fs.readFile(args[0], 'utf-8');

                console.log(JSON.parse(json));

                break;
            }

            case 'help': {
                console.log(`
доступные команды:

read <file>
write <file> <text>
copy <source> <destination>
delete <file>
info <file>
writejson <file>
readjson <file>
`);
                break;
            }

            default:
                console.log('неизвестная команда');
        }

    } catch (error) {
        console.error('ошибка:', error.message);
    }
}

main();