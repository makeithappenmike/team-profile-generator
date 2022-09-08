const inquirer = require('inquirer');

// Create an array of questions for user input
const initialQuestions = [
    {
        type: "input",
        message: "What is the team Manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the team Manager's employee ID?",
        name: "employeeId"
    },
    {
        type: "input",
        message: "What is the team Manager's email address?",
        name: "emailAddress"
    },
    {
        type: "input",
        message: "What is the team Manager's office number?",
        name: "officeNumber"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Would you like to add another team member?',
        choices: ['Engineer', 'Intern', 'No, I am done']
    }
];

const employeeQuestions = [
    {
        type: "input",
        message: "What is the team Engineer's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the Engineer's employee ID?",
        name: "employeeId"
    },
    {
        type: "input",
        message: "What is the Engineer's email address?",
        name: "emailAddress"
    },
    {
        type: "input",
        message: "What is the Engineer's Github username?",
        name: "gitHub"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Would you like to add another team member?',
        choices: ['Engineer', 'Intern', 'No, I am done']
    }
];

const internQuestions = [
    {
        type: "input",
        message: "What is the Intern's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the Intern's employee ID?",
        name: "employeeId"
    },
    {
        type: "input",
        message: "What is the Intern's email address?",
        name: "emailAddress"
    },
    {
        type: "input",
        message: "What is the Intern's school?",
        name: "school"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Would you like to add another team member?',
        choices: ['Engineer', 'Intern', 'No, I am done']
    }
];

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