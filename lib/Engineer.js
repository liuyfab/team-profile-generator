const Engineer = require('./Employee');
//constrcut the class of engineer
class Engineer {
    constructor(name, id, email, github) {
        super(name,id,email);
        this.github = github;
    }
    getRole(){return 'Engineer'}
    getGithub(){return this.github}
}



module.exports = Engineer;