import cluster from 'cluster';
import os from 'os';
import process from 'process';
import http from 'http';

if (cluster.isPrimary) {
    // jalankan worker
    console.info(`primary: ${process.pid}`);
    
    // jalankan sesuai dengan jumlah core cpu
    for (let i=0; i<os.cpus().length; i++) {
        cluster.fork();
    }

    cluster.addListener('exit', (worker) => {
        console.info(`Worker-${worker.id} is exit`);
        // cluster.fork(); // jalankan workder baru ketika ada yang mati
    });
}

if (cluster.isWorker) {
    console.info(`worker: ${process.pid}`);

    const server = http.createServer((req, res) => {
        res.write(`Response from process ${process.pid}`);
        res.end();
        process.exit();
    });

    server.listen(3000);
}

