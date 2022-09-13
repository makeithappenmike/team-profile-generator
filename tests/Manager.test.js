const Manager = require("../index.js");

describe('Manager', () => {
  it('captures the Managers office number', () => {

  const employeeName = "Manager Name";
  const id = "1";
  const email = "test@test.com";
  const role = "Manager";
  const officeNumber = "Office Number";
  const manager = new Manager(employeeName, id, email, role, officeNumber);

  expect(manager.officeNumber).toEqual(officeNumber);

  });
});
``