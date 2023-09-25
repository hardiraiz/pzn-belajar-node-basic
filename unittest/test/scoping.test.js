beforeAll(() => console.info('Before All Outer'));
afterAll(() => console.info('After All Outer'));
beforeEach(() => console.info('Before Each Outer'));
afterEach(() => console.info('After Each Outer'));

test('Test Outer', () => console.info('Test Outer'));

describe('Inner', () => {
    beforeAll(() => console.info('Before All Inner'));
    afterAll(() => console.info('After All Inner'));
    beforeEach(() => console.info('Before Each Inner'));
    afterEach(() => console.info('After Each Inner'));

    test('Test Inner', () => console.info('Test Inner'));

});

describe('Inner 2', () => {
    beforeAll(() => console.info('Before All Inner 2'));
    afterAll(() => console.info('After All Inner 2'));
    beforeEach(() => console.info('Before Each Inner 2'));
    afterEach(() => console.info('After Each Inner 2'));

    test('Test Inner', () => console.info('Test Inner 2'));

});
