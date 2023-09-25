test('string', () => {
    const name = 'M Hardi Raiz';
    
    expect(name).toBe('M Hardi Raiz');
    expect(name).toMatch(/rdi/);
});