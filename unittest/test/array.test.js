test('array', () => {
    const names = ['Khisan', 'Hardi', 'Jerre', 'Dika'];
    expect(names).toContain('Hardi');
    expect(names).toEqual(['Khisan', 'Hardi', 'Jerre', 'Dika']);

    const persons = [{name: 'Hardi'}, {name: 'Khisan'}];
    expect(persons).toContainEqual({name: 'Khisan'});
    expect(persons).toEqual([{name: 'Hardi'}, {name: 'Khisan'}]);
});