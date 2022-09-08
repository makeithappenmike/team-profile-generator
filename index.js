const inquirer = require('inquirer');
// import inquirer from 'inquirer';

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
        message: 'Would you like to add another team member?',
        choices: ['Engineer', 'Intern', 'No, I am done'],
        name: 'teamMember'
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
    },
    {
        type: 'list',
        message: 'Would you like to add another team member?',
        choices: ['Engineer', 'Intern', 'No, I am done'],
        name: 'teamMember'
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
        message: 'Would you like to add another team member?',
        choices: ['Engineer', 'Intern', 'No, I am done'],
        name: 'teamMember'
    }
];

// Inital Manager's prompt
function promptManagers() {

    // Run inquirer
    inquirer
    .prompt(initialQuestions)
    .then((response) => {

        console.log(response);

        // Manager variables
        const managerName = response.managerName;
        const managerId = response.managerId;
        const managerEmail = response.managerEmail;
        const managerNumber = response.managerNumber;
        const teamMember = response.teamMember;

        addTeamMember(teamMember);

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
        const teamMember = response.teamMember;

        addTeamMember(teamMember);

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
        const teamMember = response.teamMember;

        addTeamMember(teamMember);

    });
}

// Add team member
function addTeamMember(teamMember) {
    if (teamMember === "Engineer") {
        promptEngineers();
    } else if (teamMember === "Intern") {
        promptEngineers();
    } else {
        console.log("All done here, let's generate your HTML!");
    };
}

// Create a function to initialize app
function init() {
    promptManagers();
}

// Function call to initialize app
init();

// Create a function to write README file
function writeToFile(readMe) {

    // Create "Generated" file to retain repo's README.md
    fs.writeFile("README(GENERATED).md", readMe, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("README(GENERATED).md", "utf8"));
        }
      });
}

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