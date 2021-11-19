//tests for the Engineer class. tests object creation and each of the class methods.
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Alec', 2, 'alec@fakemail.com', 'ibealec');
    expect(typeof(engineer)).toBe("object"); 
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
});

test("gets an engineer's github", () => {
    const engineer = new Engineer('Alec', 2, 'alec@fakemail.com', 'ibealec');

    expect(engineer.getGithub()).toEqual('ibealec');
});

test("gets an engineer's role", () => {
    const engineer = new Engineer('Alec', 2, 'alec@fakemail.com', 'ibealec');

    expect(engineer.getRole()).toEqual('Engineer');
});