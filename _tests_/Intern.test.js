const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('John', 5, 'john@fakemail.com', '2university');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("gets an intern's school", () => {
    const intern = new Intern('John', 5, 'john@fakemail.com', '2university');
    expect(intern.getSchool()).toEqual(intern.school);
});

test("gets an intern's role", () => {
    const intern = new Intern('John', 5, 'john@fakemail.com', '2university');

    expect(intern.getRole()).toEqual('Intern');
});