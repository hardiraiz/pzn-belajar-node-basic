import winston from 'winston';

test('logger with combine format', () => {
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.combine(
            winston.format.timestamp(), // mengambil timestamp
            winston.format.ms(), // mengambil jarak antar log
            winston.format.json() // return value json
        ),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.info('Hello World');
    logger.warn('Hello World');
    logger.error('Hello World');
});