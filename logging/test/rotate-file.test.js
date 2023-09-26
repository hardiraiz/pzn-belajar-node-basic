import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

test('logging with daily rotate file', () => {
    const logger = winston.createLogger({
        level: 'info',
        transports: [
            new winston.transports.Console({}),
            new DailyRotateFile({
                filename: 'app-%DATE%.log',
                zippedArchive: true, // compres log yang lama
                maxSize: '1m', // maksimal ukuran file satuan Mega
                maxFiles: '14d', // lama file disimpan
            })
        ]
    });

    for (let i = 0; i < 10000; i++) {
        logger.info('Hello Info');
        logger.warn('Hello Warn');
        logger.error('Hello Error');
    }
});
