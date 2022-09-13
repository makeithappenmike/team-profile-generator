// Create Employee class
class Employee {
    constructor(employeeName, id, email, role) {
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName() {
        console.log(`Name: ${this.employeeName}`);
    };
    getId() {
        console.log(`Id: ${this.id}`);
    };
    getEmail() {
        console.log(`Email: ${this.email}`);
        return this.email;
    };
    getRole() {
        console.log(`Role: ${this.role}`);
        return this.role;
    };
}

module.exports = Employee;