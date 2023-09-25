import { getBalance } from '../src/async.js';

test('mock async function', async () => {
    const from = jest.fn();
    from.mockResolvedValueOnce(1000);

    await expect(getBalance('Hardi', from)).resolves.toEqual({
        name: 'Hardi', balance: 1000
    });

    await expect(from.mock.calls.length).toBe(1);
    await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing('mock async function rejected', async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce(new Error('Ups'));
    
    await getBalance('Hardi', from);
});

test('mock async function rejected matchers', async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce('Rejected');
    
    await expect(getBalance('Hardi', from)).rejects.toBe('Rejected');
});
