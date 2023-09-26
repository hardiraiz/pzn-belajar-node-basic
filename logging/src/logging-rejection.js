import winston from "winston";

async function callAsync() {
    return Promise.reject('Ups');
}

const logger = winston.createLogger({
    level: 'info',
    // handleRejections: true,
    transports: [
        new winston.transports.File({
            handleRejections: true,
            filename: 'exception.log'
        })
    ]
});

callAsync();