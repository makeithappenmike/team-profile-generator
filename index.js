class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        console.log(`Name: ${this.name}`);
    };
    getId() {
        console.log(`Id: ${this.id}`);
    };
    getEmail() {
        console.log(`Email: ${this.email}`);
    };
    getRole() {
        console.log(`Role: ${this.role}`);
    };
}

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    getRole() {
        this.role = "Manager";
        return this.role;
    };
}

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }
    getGithub() {
        console.log(`Github: ${this.github}`);
    };
    getRole() {
        this.role = "Engineer";
        return this.role;
    };
}

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
    getSchool() {
        console.log(`School: ${this.school}`);
    };
    getRole() {
        this.role = "Intern";
        return this.role;
    };
}