import express from 'express';
import request from 'supertest';

const app = express();

test('Response', async () => {
    app.get('/', (req, res) => {
        res.send(`Hello Response`);
    });

    const response = await request(app).get('/');

    expect(response.text).toBe('Hello Response');
});

test('Response Status', async () => {
    app.get('/', (req, res) => {
        if (req.query.name) {
            res.status(200).send(`Hello ${req.query.name}`);
        } else {
            res.status(400).end();
        }
    });

    let response = await request(app)
        .get('/')
        .query({name: 'Hardi'});

    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello Hardi');
    
    response = await request(app).get('/');
    expect(response.status).toBe(400);
});

test('Response Header', async () => {
    app.get('/', (req, res) => {
        res.set({
            'X-Powered-By': 'Programmer Zaman Now',
            'X-Author': 'Hardi'
        }).end();
    });

    const response = await request(app).get('/');

    expect(response.get('X-Powered-By')).toBe('Programmer Zaman Now');
    expect(response.get('X-Author')).toBe('Hardi');
});

test('Response Body', async () => {
    app.get('/', (req, res) => {
        res.set('Content-Type', 'text/html');
        res.send('<h1>Hello HTML</h1>');
    });

    const response = await request(app).get('/');
    expect(response.get('Content-Type')).toContain('text/html');
    expect(response.text).toBe('<h1>Hello HTML</h1>')
});
