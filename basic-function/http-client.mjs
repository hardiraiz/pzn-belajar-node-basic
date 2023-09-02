import https from 'https';

const endpoint = 'https://webhook.site/cea63326-9786-4e61-826e-8d433aa45ee0';
const request = https.request(endpoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}, (response) => {
    response.addListener('data', (data) => {
        console.info(`Receive: ${data.toString()}`);
    });
});

const body = JSON.stringify({
    firstName: 'Hardi',
    lastName: 'Raiz'
});

request.write(body);
request.end();
