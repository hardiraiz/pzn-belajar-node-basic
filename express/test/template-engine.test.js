import express from 'express';
import request from 'supertest';
import mustacheExpress from 'mustache-express';

const app = express();

app.set('views', __dirname + '/views'); // setting lokasi template
app.set('view engine', 'html'); // setting ekstensi file template
app.engine('html', mustacheExpress()); // setting penguraian mustache ke html

app.get('/', (req, res) => {
    res.render('index', { // mencari template dengan nama index
        title: 'Hello World!', // value 1
        say: 'This is a test' // value 2
    })
});

test('Test Response Template Engine', async () => {
    const response = await request(app).get('/');
    console.info(response.text)
    expect(response.text).toContain('Hello World!');
    expect(response.text).toContain('This is a test');
});
