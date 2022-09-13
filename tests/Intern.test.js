const Intern = require("../lib/Intern.js");

describe('Intern School', () => {
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

describe('Intern getRole()', () => {
  it('retrieves the Intern Role', () => {

  const employeeName = "Intern Name";
  const id = "1";
  const email = "test@test.com";
  const role = "Intern";
  const school = "School";
  const intern = new Intern(employeeName, id, email, role, school);

  expect(intern.getRole()).toEqual(role);

  });

});

describe('Intern getSchool()', () => {
  it('retrieves the Intern GitHub', () => {

  const employeeName = "Intern Name";
  const id = "1";
  const email = "test@test.com";
  const role = "Intern";
  const school = "School";
  const intern = new Intern(employeeName, id, email, role, school);

  expect(intern.getSchool()).toEqual(school);

  });

});
