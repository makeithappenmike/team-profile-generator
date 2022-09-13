const Employee = require("./Employee");

// Create Intern class
class Intern extends Employee {
    constructor(employeeName, id, email, role, school) {
        super(employeeName, id, email, role);
        this.school = school;
    }
    getSchool() {
        console.log(`School: ${this.school}`);
        return this.school;
    };
    getRole() {
        return this.role;
    };
}

module.exports = Intern;