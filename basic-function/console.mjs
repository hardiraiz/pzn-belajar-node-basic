import { Console } from "console";
import fs from 'fs';

const logFile = fs.createWriteStream('application.log');

const log = new Console({
    stdout: logFile,
    stderr: logFile
});

log.info('Hello info');
log.error('Hello error');

const person = {
    firstname: 'Hardi',
    lastname: 'Raiz'
};

log.table(person);
