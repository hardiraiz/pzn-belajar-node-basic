import path from 'path';

const file = '/Users/mac/Desktop/contoh.html';

console.info(path.sep);
console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));
console.info(path.parse(file));
