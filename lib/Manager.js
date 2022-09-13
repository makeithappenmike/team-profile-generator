const Employee = require("./Employee");

// Create Manager class
class Manager extends Employee {
    constructor(employeeName, id, email, role, officeNumber) {
        super(employeeName, id, email, role);
        this.employeeName = employeeName;
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    };
    getRole() {
        return this.role;
    };
}

module.exports = Manager;