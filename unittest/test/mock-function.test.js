import {calculate, calculateAndReturn} from '../src/sum.js';

test('test calculate', () => {
    const callback = jest.fn(); // mock function

    // pemanggilan mock function
    calculate([10, 10, 10], callback);
    calculate([10, 10, 10, 10, 10], callback);

    console.info(callback.mock.calls);

    expect(callback.mock.calls.length).toBe(2); // pemanggilan callback 2 kali?
    expect(callback.mock.calls[0][0]).toBe(30);
    expect(callback.mock.calls[1][0]).toBe(50);
    
    /* 
        isi dari callback adalah sebagai berikut
        [[30], [50]]

        oleh karena itu ketika melakukan unit test
        untuk mendapatkan value harus menggunakan pemanggilan array
    */

});

test('test mock return value', () => {
    const callback = jest.fn();
    callback.mockReturnValueOnce(40);
    callback.mockReturnValueOnce(80);

    
    expect(calculateAndReturn([10, 10, 10], callback)).toBe(40);
    expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(80);
    
    console.info(callback.mock.results);

    expect(callback.mock.results[0].value).toBe(40);
    expect(callback.mock.results[1].value).toBe(80);
});

test('test mock implementation', () => {
    const callback = jest.fn();
    callback.mockImplementation((total) => {
        return total * 2;
    });

    
    expect(calculateAndReturn([10, 10, 10], callback)).toBe(60);
    expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(100);
    
    console.info(callback.mock);
    
    expect(callback.mock.results[0].value).toBe(60);
    expect(callback.mock.results[1].value).toBe(100);
});
