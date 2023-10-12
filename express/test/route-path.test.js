import express from 'express';
import request from 'supertest';

const app = express();

app.get('/products/*.json', (req, res) => {
    res.send(req.originalUrl);
});

// regex untuk nama file angka (decimal)
app.get('/categories/*(\\d+).json', (req, res) => {
    res.send(req.originalUrl);
});

test('Route Path', async () => {
    let response = await request(app).get('/products/test.json');
    expect(response.text).toBe('/products/test.json');

    response = await request(app).get('/products/salah.json');
    expect(response.text).toBe('/products/salah.json');

    response = await request(app).get('/categories/1234.json');
    expect(response.text).toBe('/categories/1234.json');

    // tidak ditemukan karena nama file bukan angka/decimal
    response = await request(app).get('/categories/salah.json');
    expect(response.status).toBe(404);
});