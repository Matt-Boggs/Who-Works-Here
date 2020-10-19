const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email)
        this.officeNumber = officeNumber
        this.getRole = () => {return "Manager"}
        this.getOfficeNumber = () => {return officeNumber}
    }
}
module.exports = Manager