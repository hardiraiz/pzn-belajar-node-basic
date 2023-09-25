import {sum} from '../src/sum.js';

beforeAll(() => {
    console.info('Before All');
});

afterAll(() => {
    console.info('After All');
});

beforeEach(() => {
    console.info('Before Each');
});

afterEach(() => {
    console.info('After Each');
});

test('first test', () => {
    expect(sum(10, 10)).toBe(20);
});

test('second test', () => {
    expect(sum(10, 10)).toBe(20);
});
