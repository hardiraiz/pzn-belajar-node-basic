import express from 'express';
import request from 'supertest';

const app = express();

// built-in middleware req body data json
app.use(express.json()); 

// built-in middleware req body data form
// apabila nilai extendet false maka tidak membaca query parameter
app.use(express.urlencoded({extended: false})) 

app.post('/json', (req, res) => {
    const name = req.body.name;
    res.json({ hello: `Hello ${name}` })
});

app.post('/form', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    res.json({ hello: `Hello ${name}`, age: age })
});

test('Request Body JSON', async () => {
    const response = await request(app)
    .post('/json')
    .set('Content-Type', 'application/json')
        .send({name: 'World'});
    
    expect(response.body).toEqual({
        hello: 'Hello World'
    });
});

test('Request Body Form', async () => {
    const response = await request(app)
        .post('/form')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send('name=World&age=2');
    
    expect(response.body).toEqual({
        hello: 'Hello World',
        age: '2'
    });
});