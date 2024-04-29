function tagFunction(array, ...args) {
    console.info(array);
    console.info(args);
}

test('Tag Function', () => {
    const firstName = "Hardi";
    const lastName = "Raiz";

    tagFunction`Hello ${firstName} ${lastName}!, How are you?`;
    tagFunction`Bye ${firstName} ${lastName}!, see you later.`;
});

test('Tag Function SQL', () => {
    const name = 'Hardi';
    const age = 26;

    tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});
