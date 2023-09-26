import winston from 'winston';


test('logger with format', () => {
    const logger = winston.createLogger({
        level: 'info',
        // format: winston.format.json(),
        // format: winston.format.simple(),
        format: winston.format.logstash(),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.info('Hello World');
});

test('logging with printf format', () => {
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.printf(info => {
            return `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`;
        }),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.info('Hello World');
});