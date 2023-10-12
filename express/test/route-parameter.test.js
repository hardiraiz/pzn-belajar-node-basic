import express from 'express';
import request from 'supertest';

const app = express();

app.get('/products/:id', (req, res) => {
    res.send(`Products: ${req.params.id}`);
});

app.get('/categories/:id(\\d+)', (req, res) => {
    res.send(`Products: ${req.params.id}`);
});

test('Route Path', async () => {
    let response = await request(app).get('/products/12345');
    expect(response.text).toBe('Products: 12345');
    
    response = await request(app).get('/products/salah');
    expect(response.text).toBe('Products: salah');

    response = await request(app).get('/categories/12345');
    expect(response.text).toBe('Products: 12345');

    response = await request(app).get('/categories/salah');
    expect(response.status).toBe(404);
});