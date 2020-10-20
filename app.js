const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const outputPathCSS = path.join(OUTPUT_DIR, "style.css");
const render = require("./lib/htmlRenderer");
let empArr = []
beginAsking = () => {
    inquirer.prompt({
            type: "list",
            message: "What type of employee are you adding?",
            choices: [Manager,Engineer,Intern,"No more employees"],
            name: "empType"
    }).then(function(response){
        
        switch(response.empType){
            case "Manager":
                let questionsM = [{
                    type: "input",
                    message: "What is the employee's name?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is your employee id?",
                    name: "id"
                },
                {
                    type: "input",
                    message: "What is your email address?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is your office number?",
                    name: "officeNumber"
                }]
                inquirer.prompt(questionsM).then(function(response){
                    let newEmployee = new Manager(response.name,response.id,response.email,response.officeNumber)
                    empArr.push(newEmployee)
                    beginAsking()
                })
                break;
            case "Engineer":
                let questionsE = [{
                    type: "input",
                    message: "What is the employee's name?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is your employee id?",
                    name: "id"
                },
                {
                    type: "input",
                    message: "What is your email address?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is your github profile name?",
                    name: "github"
                }]
                inquirer.prompt(questionsE).then(function(response){
                    let newEmployee = new Engineer(response.name,response.id,response.email,response.github)
                    empArr.push(newEmployee)
                    beginAsking()
                })
                break;
            case "Intern":
                let questionsI = [{
                    type: "input",
                    message: "What is the employee's name?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is your employee id?",
                    name: "id"
                },
                {
                    type: "input",
                    message: "What is your email address?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is your school?",
                    name: "school"
                }]
                inquirer.prompt(questionsI).then(function(response){
                    let newEmployee = new Intern(response.name,response.id,response.email,response.school)
                    empArr.push(newEmployee)
                    beginAsking()
                })
                break;
            case "No more employees":
                fs.writeFile(outputPath,render(empArr),function(err){
                    if(err){return console.log(err)}
                })
                fs.writeFile(outputPathCSS,
                    `#MeetTeam {
                        font-family: 'Lobster', cursive; color: aliceblue; font-size: 50pt;
                    }
                    #MTBG {
                        background-color: rgb(211, 23, 23);
                    }
                    .employee-card{
                        margin-left: 3px; margin-right: 3px;
                    }`,
                    (err) => {
                    if(err){return console.log(err)}
                })
        }
    })
}
beginAsking()
