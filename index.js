const inquirer = require('inquirer');

// Create an array of questions for user input
const initialQuestions = [
    {
        type: "input",
        message: "What is the team Manager's name?",
        name: "employeeName"
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
        name: "employeeName"
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
        name: "employeeName"
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

        console.log("PM Response:", response);

        // Manager variables
        const managerName = response.employeeName;
        const managerId = response.employeeId;
        const managerEmail = response.emailAddress;
        const managerNumber = response.officeNumber;
        const role = "Manager";
        console.log("PM Role", role);
        // teamMember = this.response.teamMember;
        // console.log("Manager TM:", teamMember);

        const newEmployee = new Manager(managerName, managerId, managerEmail, role, managerNumber);

        employees.push(newEmployee);

        console.log("PM Employee:", newEmployee);

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
        const engineerName = response.employeeName;
        const engineerId = response.employeeId;
        const engineerEmail = response.emailAddress;
        const gitHub = response.gitHub;
        const role = "Engineer";
        // teamMember = this.response.teamMember;
        // console.log("Engineer TM:", teamMember);

        const newEmployee = new Engineer(engineerName, engineerId, engineerEmail, role, gitHub);

        employees.push(newEmployee);

        console.log("PE Employee:", newEmployee);

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
        const internName = response.employeeName;
        const internId = response.employeeId;
        const internEmail = response.emailAddress;
        const school = response.school;
        const role = "Intern";
        // teamMember = this.response.teamMember;
        // console.log("TM:", teamMember);

        const newEmployee = new Intern(internName, internId, internEmail, role, school);

        employees.push(newEmployee);

        console.log("PI Employee:", newEmployee);

        addTeamMember();

    });
}

// Add team member
function addTeamMember() {

        console.log("ATM Employees:", employees);
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

// Create Manager class
class Manager extends Employee {
    constructor(employeeName, id, email, role, officeNumber) {
        super(employeeName, id, email, role);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return this.role;
    };
}

// Create Engineer class
class Engineer extends Employee {
    constructor(employeeName, id, email, role, github) {
        super(employeeName, id, email, role);
        this.github = github;
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
    getGithub() {
        return this.github;
    };
    getRole() {
        return this.role;
    };
}

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