const Engineer = require("../index.js");

describe('Engineer', () => {
    it('captures the GitHub username', () => {

    const gitHub = "GitHub";
    const engineer = new Engineer("Employee Name", "1", "employee@email.com", "Engineer", gitHub);

    expect(engineer.gitHub).toEqual(gitHub);
    
    });
  });
