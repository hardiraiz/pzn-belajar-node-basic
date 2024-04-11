import express from 'express';
import request from 'supertest';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser('THISISSECRETKEY'));

app.get('/', (req, res) => {
    const name = req.signedCookies['name'];
    res.send(`Hello ${name}`);
});

app.post('/login',  (req, res) => {
    const name = req.body.name;
    res.cookie('Login', name, {path: '/', signed: true});
    res.send(`Hello ${name}`);
});

test('Test Cookie Read', async () => {
    const response = await request(app).get('/')
        .set('Cookie', 'name=s%3AHardi.9kD1jxm3y3LZuvSisJBPm3OR9AAsAi%2FjO45%2Bmtk0Og');
    expect(response.text).toBe('Hello Hardi');
});

test('Test Cookie Write', async () => {
    const response = await request(app).post('/login')
        .send({name: 'Hardi'});

    const cookie = response.get('Set-Cookie').toString()
    console.info(cookie);

    expect(cookie).toContain('Hardi');
    expect(response.text).toBe('Hello Hardi');
});