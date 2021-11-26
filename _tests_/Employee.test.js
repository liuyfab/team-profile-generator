
const Employee = require('../lib/Employee'); 

test("Creating an Employee Instance Object ", () =>{
    const testData = new Employee('Jared', 1, 'jared@fakemail.com');    
});
//condition that you want to test for ;
test("get an employee name is from method",()=>{
    const testName = new Employee('Jared', 1, 'jared@fakemail.com');
    expect(testName.getName()).toBe('Jared');
})

test("gets an employee's id", () => {
    const testId = new Employee('Jared', 1, 'jared@fakemail.com');
    expect(testId.getId()).toBe(1);
});

test("get an emploee's email",() => {
    const testEmail = new Employee('Jared', 1, 'jared@fakemail.com')
    expect(testEmail.getEmail()).toBe('jared@fakemail.com');
});

test("get an employee's role",() => {
    const testRole = new Employee('Jared', 1, 'jared@fakemail.com')
    expect(testRole.getRole()).toBe('Employee');
})