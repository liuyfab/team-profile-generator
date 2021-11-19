//constrcut the class of engineer
class Engineer {

    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
}

const Engineer = [
    new Engineer('Alec', 2, 'alec@fakemail.com', 'ibealec'),
    new Engineer('Grace', 3, 'grace@fakemail.com', 'gchi2u'),
    new Engineer('Tammer', 4, 'tammer@fakemail.com', 'tammerg'),
  ];

module.exports = Engineer;