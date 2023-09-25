import {sayHello} from '../src/sayHello.js';

test('sayHello success', () => {
    expect(sayHello('Hardi')).toBe('Hello Hardi');
});

test.failing('sayHello error', () => {
    sayHello(null);
});

test('sayHello error matchers', () => {
    expect(() => sayHello(null)).toThrow();
}); 
