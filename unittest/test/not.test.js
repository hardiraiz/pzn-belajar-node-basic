test('string.not', () => {
    const name = 'Hardi Raiz';

    expect(name).not.toBe('Eko');
    expect(name).not.toEqual('Eko');
    expect(name).not.toMatch(/eko/);
});

test('number.not', () => {
    const value = 2 + 2;

    expect(value).not.toBeGreaterThan(6);
    expect(value).not.toBeLessThan(2);
    expect(value).not.toBe(10);
});
