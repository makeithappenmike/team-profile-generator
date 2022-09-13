const Engineer = require("../index.js");

describe('Engineer', () => {
  it('captures the Engineers GitHub', () => {

  const employeeName = "Engineer Name";
  const id = "1";
  const email = "test@test.com";
  const role = "Engineer";
  const gitHub = "GitHub";
  const engineer = new Engineer(employeeName, id, email, role, gitHub);

  expect(engineer.gitHub).toEqual(gitHub);

  });
});
