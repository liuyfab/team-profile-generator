const Employee = require('./Employee');

//constrcut the class of Intern
class Intern extends Employee {

    constructor(name, id, email, school) {
        //inherting from parent class employee
        super(name,id,email)
        this.school = school;
    }
    getRole(){return 'Intern'};
    getSchool(){return this.school};
}


module.exports = Intern;