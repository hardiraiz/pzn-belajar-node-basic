import express from 'express';
import request from 'supertest';

const app = express();
app.use(express.static(__dirname + '/static')); // tanpa prefix
app.use('/static', express.static(__dirname + '/static')); // dengan prefix

app.get('/', (req, res) => {
    res.send('Hello Response');
});

app.get('/contoh.txt', (req, res) => {
    res.send('Hello Response');
});

test('Static File', async () => {
    let response = await request(app).get('/');
    expect(response.text).toBe('Hello Response');

    response = await request(app).get('/contoh.txt');
    expect(response.text).toContain('Hello Static');
});

test('Static File Path', async () => {
    let response = await request(app).get('/');
    expect(response.text).toBe('Hello Response');

    // memanggil route yang namanya sama dengan static file
    // akan memanggil static file karena telah ditimpa
    response = await request(app).get('/contoh.txt');
    expect(response.text).toBe('Hello Response');
});

test('Static File Prefix', async () => {
    let response = await request(app).get('/');
    expect(response.text).toBe('Hello Response');

    response = await request(app).get('/static/contoh.txt');
    expect(response.text).toContain('Hello Static');
});
