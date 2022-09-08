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
    }
];

const engineerQuestions = [
    {
        type: "input",
        message: "What is the Engineer's name?",
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
    }
];

const addTeamMemberQuestions = [
    {
        type: 'list',
        message: 'Would you like to add another team member?',
        choices: ['Engineer', 'Intern', 'No, I am done'],
        name: 'teamMember'
    }
];

const employees = [];

// Inital Manager's prompt
function promptManagers() {

    // Run inquirer
    inquirer
    .prompt(initialQuestions)
    .then((response) => {

        console.log(response);

        // Manager variables
        const managerName = response.managerName;
        const managerId = response.employeeId;
        const managerEmail = response.emailAddress;
        const managerNumber = response.managerNumber;
        // teamMember = this.response.teamMember;
        // console.log("Manager TM:", teamMember);

        const employee = new Employee(managerName, managerId, managerEmail);

        employees.push(employee);

        console.log("PM Employee:", employee);
        console.log("PM Employee:", employees);

        addTeamMember();

    });
}

// Engineer prompt
function promptEngineers() {

    // Run inquirer
    inquirer
    .prompt(engineerQuestions)
    .then((response) => {

        console.log(response);

        // Engineer variables
        const engineerName = response.engineerName;
        const engineerId = response.engineerId;
        const engineerEmail = response.engineerEmail;
        const engineerNumber = response.engineerNumber;
        // teamMember = this.response.teamMember;
        // console.log("Engineer TM:", teamMember);

        addTeamMember();

    });
}

// Intern prompt
function promptInterns() {

    // Run inquirer
    inquirer
    .prompt(internQuestions)
    .then((response) => {

        console.log(response);

        // Intern variables
        const internName = response.internName;
        const internId = response.internId;
        const internEmail = response.internEmail;
        const internNumber = response.internNumber;
        // teamMember = this.response.teamMember;
        // console.log("TM:", teamMember);

        addTeamMember();

    });
}

// Add team member
function addTeamMember() {
    
        // Run inquirer
        inquirer
        .prompt(addTeamMemberQuestions)
        .then((response) => {
        const teamMember = response.teamMember;
        console.log("ATM TM:", teamMember.toString());
        if (teamMember === "Engineer") {
            promptEngineers();
        } else if (teamMember === "Intern") {
            promptInterns();
        } else {
            console.log("All done here, let's generate your HTML!");
        };
    });
}

// Create a function to initialize app
function init() {
    promptManagers();
}

// Function call to initialize app
init();

// Create Employee class
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
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

// Create Manager class
class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    getRole() {
        this.role = "Manager";
        return this.role;
    };
}

// Create Engineer class
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

// Create Intern class
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