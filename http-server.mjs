import http from 'http';

const server = http.createServer((request, response) => {
    console.info(request.method);
    console.info(request.url);

    if(request.url === '/hardi') {
        response.write('Hello hardi');
    } else {
        response.write(`Hello HTTP Server`);
    }

    response.end();
});

server.listen(3000);
