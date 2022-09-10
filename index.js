const inquirer = require('inquirer');
const fs = require("fs");

// Intial Questions
const addTeamMemberQuestions = [
    {
        type: 'list',
        message: 'Would you like to add another team member?',
        choices: ['Engineer', 'Intern', 'No, I am done'],
        name: 'teamMember'
    }
];

// Manager Questions
const managerQuestions = [
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

// Engineer Questions
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

// Intern Questions
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

// Create HTML Strings array
const htmlStrings = [];

// Initial Prompt
// initialPrompt() {
    
// };

// Manager's prompt
function promptManagers() {

    // Run inquirer
    inquirer
    .prompt(initialQuestions)
    .then((response) => {

        // Manager variables
        const managerName = response.employeeName;
        const managerId = response.employeeId;
        const managerEmail = response.emailAddress;
        const managerNumber = response.officeNumber;
        const icon = `<i class="fa fa-coffee" aria-hidden="true"></i>`;
        const role = icon + " Manager";

        // Pass into Manager class
        const newEmployee = new Manager(managerName, managerId, managerEmail, role, managerNumber);

        // Create HTML String
        const htmlString = `
        <section class="block">
            <section class="top">
                <ul>
                    <li>${managerName}</li>
                    <li>${role}</li>
                </ul>
            </section>
            <section class="bottom">
                <ul>
                    <li>${managerId}</li>
                    <li><a href="mailto:${managerEmail}">${managerEmail}</a></li>
                    <li>${managerNumber}</li>
                </ul>
            </section>
        </section>
        `;

        // Pass HTML STring into HTML Strings array
        htmlStrings.push(htmlString);

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
        const icon = `<i class="fa fa-code" aria-hidden="true"></i>`;
        const role = icon + " Engineer";

        // Pass into Engineer class
        const newEmployee = new Engineer(engineerName, engineerId, engineerEmail, role, gitHub);

        // Create HTML String
        const htmlString = `
        <section class="block">
            <section class="top">
                <ul>
                    <li>${engineerName}</li>
                    <li>${role}</li>
                </ul>
            </section>
            <section class="bottom">
                <ul>
                    <li>${engineerId}</li>
                    <li><a href="mailto:${engineerEmail}">${engineerEmail}</a></li>
                    <li><a href="https://github.com/${gitHub}" target="blank">${gitHub}</a></li>
                </ul>
            </section>
        </section>
        `;

        // Pass HTML STring into HTML Strings array
        htmlStrings.push(htmlString);
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
        const icon = `<i class="fa fa-graduation-cap" aria-hidden="true"></i>`;
        const role = icon + " Intern";

        // Pass into Intern class
        const newEmployee = new Intern(internName, internId, internEmail, role, school);

        // Create HTML String
        const htmlString = `
        <section class="block">
            <section class="top">
                <ul>
                    <li>${internName}</li>
                    <li>${role}</li>
                </ul>
            </section>
            <section class="bottom">
                <ul>
                    <li>${internId}</li>
                    <li><a href="mailto:${internEmail}">${internEmail}</a></li>
                    <li>${school}</li>
                </ul>
            </section>
        </section>
        `;

        // Pass HTML STring into HTML Strings array
        htmlStrings.push(htmlString);
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

        // Handle selection
        if (teamMember === "Engineer") {
            promptEngineers();
        } else if (teamMember === "Intern") {
            promptInterns();
        } else {

            // Generate Index.html file
            console.log("All done here, let's generate your HTML!");
            const entireString = htmlStrings.join('');
            const finalString = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <link rel="stylesheet" href="./assets/css/style.css">
                <title>Team Profile Generator</title>
            </head>
            <body>
                <nav class="nav">
                    My Team
                </nav>
                <section class="main">
                    ${entireString}
                </section>
                <script src="./assets/index.js"></script>
            </body>
            </html> 
            `
            writeToFile(finalString);
        };
    });
}

// Create a function to write README file
function writeToFile(htmlString) {

    // Create "Generated" file to retain repo's README.md
    fs.writeFile("index.html", htmlString, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
        }
      });
}

// Create a function to initialize app
function init() {
    initialPrompt();
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
        this.employeeName = employeeName;
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

module.exports = Employee;
module.exports = Manager;
module.exports = Engineer;
module.exports = Intern;