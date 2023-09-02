import util from 'util';

console.info(util.format('Nama : %s', 'Eko'));

const person = {
    firstName: 'Hardi', 
    lastname: 'Raiz'
};

console.info(util.format('Person : %j', person));
