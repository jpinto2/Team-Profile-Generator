const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager')
const createpage = require('./dist/createpage');

const employees = [];

// sends employees array to be the create page
function createTeam () {

    fs.writeFile("./dist/teampage.html", createpage(employees), "utf-8", (err) => 
    err ? console.error(err) : console.log('Success!'));
}

// this setup assumes there's only one manager in the team.
// was in a bit of a rush so skipped the error checking for no input
const init = () => {
    inquirer    
        .prompt([
            {
                type: 'input',             
                name: 'name',
                message: "What is the manager's name?"
            },
            {
                type: 'number',
                name: 'id',
                message: "What is the manager's employee ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email?"
            },
            {
                type: 'number',
                name: 'office',
                message: "What is the manager's office number?"
            }
        ])
        .then((response) => {
           
                const manager = new Manager(response.name, response.id, response.email, response.office)
                employees.push(manager);
                choice();
            
        })
}

const choice = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Which employee role do you want to enter?',
                choices: ['Engineer', 'Intern', 'Done adding employees']
                
            }
        ])
        .then((response) => {
            if (response.choice === 'Engineer') addEngineer();
            else if (response.choice === 'Intern') addIntern();
            else createTeam();
            
                
        })
}

const addEngineer = () => {
    inquirer    
        .prompt([
            {
                type: 'input',             
                name: 'name',
                message: "What is the engineer's name?"
            },
            {
                type: 'number',
                name: 'id',
                message: "What is the engineer's employee ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineers's email?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's Github name?"
            }
        ])
        .then((response) => {
           
                const engineer = new Engineer(response.name, response.id, response.email, response.github)
                employees.push(engineer);
                choice();
            
        })
}

const addIntern = () => {
    inquirer    
        .prompt([
            {
                type: 'input',             
                name: 'name',
                message: "What is the intern's name?"
            },
            {
                type: 'number',
                name: 'id',
                message: "What is the intern's employee ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the name of the intern's school?"
            }
        ])
        .then((response) => {
           
                const intern = new Intern(response.name, response.id, response.email, response.school)
                employees.push(intern);
                choice();
            
        })
}

init();