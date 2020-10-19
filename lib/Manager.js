const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee{
    constructor(officeNumber){
        super(officeNumber, Manager.officeNumber)
        this.getRole = () => {
            return "Manager"
        }
        this.getOffice = () => {
            return this.officeNumber
        }
    }
}

module.exports = Manager