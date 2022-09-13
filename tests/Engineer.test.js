const Engineer = require("../lib/Engineer");

describe('Engineer GitHub', () => {
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

describe('Engineer getRole()', () => {
  it('retrieves the Engineer Role', () => {

  const employeeName = "Engineer Name";
  const id = "1";
  const email = "test@test.com";
  const role = "Engineer";
  const gitHub = "GitHub";
  const engineer = new Engineer(employeeName, id, email, role, gitHub);

  expect(engineer.getRole()).toEqual(role);

  });

});

describe('Engineer getGithub()', () => {
  it('retrieves the Engineer GitHub', () => {

  const employeeName = "Engineer Name";
  const id = "1";
  const email = "test@test.com";
    const role = "Engineer";

  const gitHub = "GitHub";
  const engineer = new Engineer(employeeName, id, email, role, gitHub);

  expect(engineer.getGithub()).toEqual(gitHub);

  });

});
