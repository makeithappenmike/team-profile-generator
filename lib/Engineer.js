const Employee = require("./Employee");

// Create Engineer class
class Engineer extends Employee {
    constructor(employeeName, id, email, role, gitHub) {
        super(employeeName, id, email, role);
        this.gitHub = gitHub;
    }
    getGithub() {
        console.log(`GitHub: ${this.gitHub}`);
        return this.gitHub;
    };
    getRole() {
        return this.role;
    };
}

module.exports = Engineer;