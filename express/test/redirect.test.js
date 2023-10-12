import express from 'express';
import request from 'supertest';

const app = express();

test('Redirect', async () => {
    app.get('/', (req, res) => {
        // res.redirect('/to-next-page');
        res.redirect(302, '/to-next-page');
        // res.redirect('https://www.somesite.com');
    });

    const response = await request(app).get('/');
    expect(response.status).toBe(302);
    expect(response.get('Location')).toBe('/to-next-page');
});