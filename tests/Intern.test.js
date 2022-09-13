const Intern = require("../index.js");

describe('Intern', () => {
  it('captures the Interns school', () => {

  const employeeName = "Intern Name";
  const id = "1";
  const email = "test@test.com";
  const role = "Intern";
  const school = "School";
  const intern = new Intern(employeeName, id, email, role, school);

  expect(intern.school).toEqual(school);

  });
});
