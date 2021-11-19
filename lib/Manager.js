const Employee = require ('./Employee');
//constrcut the class of manager
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //inherit the construct from parent class Employee 
        super (name, id, email);      
        this.officeNumber = officeNumber;
    }
    //overwriting the value from parent class method 
    getRole(){return 'Manager'};
    getOfficeNumber(){return this.officeNumber}
}

module.exports = Manager;