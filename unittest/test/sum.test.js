import { sum, sumAll } from '../src/sum';

test('sum(1, 2) must be 3', () => {
    const result = sum(1, 2);

    expect(result).toBe(3);
});

test('test sum all', () => {
    const numbers = [1, 2, 3, 4];
    expect(sumAll(numbers)).toBe(10);
});
