import express from 'express';
import request from 'supertest';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Response');
});

app.use((req, res, next) => {
    res.status(404).send('404 Request Tidak Ditemukan');
});

test('Not Found Error', async () => {
    let response = await request(app).get('/');
    expect(response.text).toBe('Hello Response');

    response = await request(app).get('/unknown');
    expect(response.text).toBe('404 Request Tidak Ditemukan');
});
