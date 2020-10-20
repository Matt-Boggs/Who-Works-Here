const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name,id,email)
        this.github = github
        this.getRole = () => { return "Engineer"}
        this.getGithub = () => {return github}
    }
}
module.exports = Engineer