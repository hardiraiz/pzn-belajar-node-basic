import express from 'express';
import request from 'supertest';

const app = express();

const logger = (req, res, next) => {
    console.info(`Receive request: ${req.method} ${req.originalUrl}`);
    next();
}

const addPoweredHeader = (req, res, next) => {
    res.set({
        'X-Powered-By': 'Programmer Zaman Now',
        'X-Author': 'Hardi'
    });

    next();
}

const apiKeyMiddleware = (req, res, next) => {
    if (req.query.apiKey) {
        next();
    } else {
        res.status(401).end();
    }
}

const requestTimeMiddleware = (req, res, next) => {
    req.requestTime = Date.now();
    next()
}

app.use(logger);
app.use(apiKeyMiddleware);
app.use(addPoweredHeader);
app.use(requestTimeMiddleware);

app.get('/', (req, res) => {
    res.send('Hello Middleware');
});

app.get('/time', (req, res) => {
    res.send(`Hello, Today Is ${req.requestTime}`);
});

test('Middleware', async () => {
    const response = await request(app)
        .get('/time')
        .query({apiKey: 'thisisapikey'});

    expect(response.text).toContain('Hello, Today Is');
});

test('Middleware 2', async () => {
    const response = await request(app)
        .get('/')
        .query({apiKey: 'thisisapikey'});

    expect(response.get('X-Powered-By')).toBe('Programmer Zaman Now');
    expect(response.get('X-Author')).toBe('Hardi');
    expect(response.text).toBe('Hello Middleware');
});

test('Middleware Authorized', async () => {
    const response = await request(app)
        .get('/')
        .query({apiKey: 'thisisapikey'});

    expect(response.text).toBe('Hello Middleware');
});

test('test null', () => {
    const a = null;
    if (a) {
        console.log('True')
    } else {
        console.log('False')
    }
});
