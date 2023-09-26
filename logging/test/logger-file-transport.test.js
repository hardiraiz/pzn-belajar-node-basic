import winston from 'winston';

test('logging with file transport', () => {
    const logger = winston.createLogger({
        level: 'info',
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: 'application.log'
            }),
            new winston.transports.File({
                filename: 'hardi.log'
            })
        ]
    });

    logger.info('Hello Info');
    logger.warn('Hello Warn');
    logger.error('Hello Error');
});
