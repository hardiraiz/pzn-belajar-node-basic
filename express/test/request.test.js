import express from 'express';
import request from 'supertest';

const app = express();

test('Request', async () => {
    app.get('/', (req, res) => {
        res.send(`Hello ${req.query.name}`);
    });

    const response = await request(app).get('/').query({name: 'World'});

    expect(response.text).toBe('Hello World');
});

test('Request URL', async () => {
    app.get('/hello/world', (req, res) => {
        res.json({
            path: req.path,
            originalUrl: req.originalUrl,
            hostname: req.hostname,
            protocol: req.protocol
        });
    });

    const response = await request(app)
        .get('/hello/world')
        .query({name: 'World'});

    expect(response.body).toEqual({
        path: '/hello/world',
        originalUrl: '/hello/world?name=World',
        hostname: '127.0.0.1',
        protocol: 'http'
    });
});

test('Request Query Params', async () => {
    app.get('/', (req, res) => {
        res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
    });

    const response = await request(app)
        .get('/')
        .query({firstName: 'Hardi', lastName: 'Raiz'});
    
    expect(response.text).toBe('Hello Hardi Raiz');
});

test('Request Header', async () => {
    app.get('/', (req, res) => {
        const type = req.get('Accept');
        res.send(`Hello ${type}`);
    });

    const response = await request(app)
        .get('/')
        .set('Accept', 'text/plain')

    expect(response.text).toBe('Hello text/plain');
});
