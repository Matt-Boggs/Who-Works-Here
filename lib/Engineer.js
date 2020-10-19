const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{
    constructor(github){
        super(github)
        this.getRole = () => { return "Engineer"}

        this.getGithub = () =>{

        }

    }
}
module.exports = Engineer