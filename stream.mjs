import fs from 'fs';

const writer = fs.createWriteStream('target.log');

writer.write('M Hardi Raiz \n');
writer.write('Belajar \n');
writer.write('NodeJS \n');
writer.end();

const reader = fs.createReadStream('target.log');
reader.addListener('data', (data) => {
    console.info(data.toString());
});
