const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let empArr = []

beginAsking = () => {
    inquirer.prompt(
        {
            type: "list",
            message: "What type of employee are you adding?",
            choices: [Manager,Engineer,Intern,"No more employees"],
            name: "empType"
        }
    ).then(function(response){
    console.log(response.empType)

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
                    console.log(empArr)
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
                    console.log(empArr)
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
                    console.log(empArr)
                    beginAsking()
                })
                break;
            case "No more employees":
                fs.writeFile(outputPath,render(empArr),function(err){
                    if(err){
                    return console.log(err)
                    }
                })
        }
        console.log(empArr)
    })
}
beginAsking()
// TEMPLATE LITERAL COMING UP

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
// fs.writeFile("./output/team.html", output)