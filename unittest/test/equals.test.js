test('test toBe', () => {
    let name = 'Hardi';
    let hello = `Hello ${name}`;

    expect(hello).toBe('Hello Hardi');
});

test('test toEquals', () => {
    let person = {id: 20};
    person.name = 'Hardi'

    expect(person).toEqual({id: 20, name: 'Hardi'});
});
