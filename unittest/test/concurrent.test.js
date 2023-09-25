import {sayHelloAsync} from '../src/async.js';

test.concurrent('concurrent 1', async () => {
    await expect(sayHelloAsync('Eko')).resolves.toBe('Hello Eko');
});
test.concurrent('concurrent 2', async () => {
    await expect(sayHelloAsync('Eko')).resolves.toBe('Hello Eko');
});
test.concurrent('concurrent 3', async () => {
    await expect(sayHelloAsync('Eko')).resolves.toBe('Hello Eko');
});

// test each concurrent
const table = [
    {value: 'Eko', expected: 'Hello Eko'},
    {value: 'Hardi', expected: 'Hello Hardi'},
    {value: 'Raiz', expected: 'Hello Raiz'},
];

test.concurrent.each(table)('test concurrent sayHelloAsync($value) should result $expected', async ({value, expected}) => {
    await expect(sayHelloAsync(value)).resolves.toBe(expected);
});
