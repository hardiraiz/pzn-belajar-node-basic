test('truthiness', () => {
    let value = null;

    expect(value).toBeNull();
    expect(value).toBeDefined();
    expect(value).toBeFalsy();

    value = undefined;
    expect(value).toBeUndefined();
    expect(value).toBeFalsy();
    // expect(value).toBeTruthy();

    value = 'Eko';
    expect(value).toBeTruthy();

});