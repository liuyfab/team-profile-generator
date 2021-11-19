
const Employee = require('../lib/Employee'); 

test("Creating an Employee Instance Object ", () =>{
    const testdata = new Employee(); 
    //condition that you want to test for 
    expect(typeof(testdata)).toBe("object"); 
});

test("get an employee name is from method",()=>{
    const testname = new Employee('Jared', 1, 'jared@fakemail.com');
    expect(testname.getName()).toBe('Jared');
})