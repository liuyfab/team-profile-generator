const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 1);

    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets a manager's role", () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 1);

    expect(manager.getRole()).toEqual('Manager');
});

test("gets a manager's office number", () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 1);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});