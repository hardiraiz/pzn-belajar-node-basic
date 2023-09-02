const buffer = Buffer.from('M Hardi Raiz', 'utf8');

console.info(buffer.toString('base64'));
console.info(buffer.toString('hex'));

const buffer2 = Buffer.from('TSBIYXJkaSBSYWl6', 'base64url');
console.info(buffer2.toString('utf8'));
