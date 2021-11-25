// require all the related files
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTMLPage = require('./src/generateHTMLPage');
const path = require('path');
const dirtPath = path.resolve(__dirname, "dist");
const outputPath = path.join(dirtPath, "index.html");
// const dirtPath = path.resolve(__dirname, 'index.html');


//employees is a global array that is used to store the employee objects as they are created.
let employees = [];
console.log('my team',employees);

//create manager by prompting manager related questions.
const managerQuestions = [
  {type: "input", message: "The manager's name is:", name: "name"},
  {type: "number", message: "The maneger's ID is:", name: "id"},
  {type: "input", message: "The manager's email address is:", name: "email" },
  {type: "number", message: "The manager's office number is:", name: "officeNum" },
]
function makeManager() { 
  inquirer.prompt(managerQuestions)
  .then((answers) => { 
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum)
    employees.push(manager);
    makeTeam();
  })
  .catch((err) => {
      console.log(err);
  })
}

makeManager();

// providing choices of adding team members after making manager.
function makeTeam(){
  inquirer.prompt([{type:"list", message: "What team member would you like to add?", name:'teamChoice', choices:['engineer','intern','Done, thanks']}])
  .then((response) =>{
    if (response.teamChoice === 'engineer'){
       makeEngineer()
    } else if(response.teamChoice === 'intern'){
      makeIntern()
    } else {
      console.log('my team',employees);
      generateEmployeeCards();
    }
  })
}

function generateEmployeeCards(){
 let htmlMarkDown = generateHTMLPage(employees);
 //console.log("HTML covereted data", htmlMarkDown); 
 //write the index.html file using the HTML generated previously.
 fs.writeFileSync(outputPath, htmlMarkDown)
}

//create the engineer by  prompting with engineer appropriate questions
const engineerQuestions = [
  {type: "input", message: "The engineer's name is:", name: "name"},
  {type: "number", message: "The engineer's ID is:", name: "id"},
  {type: "input", message: "The engineer's email address is:", name: "email" },
  {type: "input", message: "The engineer's github is:", name: "github" },
]
function makeEngineer() { 
  inquirer.prompt(engineerQuestions)
  .then((answers) => { 
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    employees.push(engineer);
    makeTeam();
  })
  .catch((err) => {
      console.log(err);
  })
}


// create the Intern by propting intern related questions
const internQuestions = [
  {type: "input", message: "The intern's name is:", name: "name"},
  {type: "number", message: "The intern's ID is:", name: "id"},
  {type: "input", message: "The intern's email address is:", name: "email" },
  {type: "input", message: "The intern's school is:", name: "school" },
]
function makeIntern() { 
  inquirer.prompt(internQuestions)
  .then((answers) => { 
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    employees.push(intern);
    makeTeam();  
  })
  .catch((err) => {
      console.log(err);
  });
}



