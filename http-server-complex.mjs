import http from 'http';
import url from 'url';


const server = http.createServer((req, res) => {
  const { method, url: requestUrl } = req;
  const parsedUrl = url.parse(requestUrl, true);

  if (method === 'POST') {
    let postData = '';

    req.on('data', (chunk) => {
      postData += chunk;
    });

    req.on('end', () => {
      try {
        const jsonData = JSON.parse(postData);

        // Di sini Anda dapat melakukan sesuatu dengan jsonData jika perlu
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(jsonData));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
  } else if (method === 'GET') {
    // Jika metode adalah GET, Anda dapat mengambil query parameter dari URL
    const queryParams = parsedUrl.query;

    // Di sini Anda dapat melakukan sesuatu dengan queryParams jika perlu
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Ini adalah respons dari metode GET');
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Metode tidak diizinkan');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

