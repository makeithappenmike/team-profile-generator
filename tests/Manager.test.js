const Manager = require("../lib/Manager.js");

describe('Manager Office Number', () => {
  it('captures the Managers Office Number', () => {

  const employeeName = "Manager Name";
  const id = "1";
  const email = "test@test.com";
  const role = "Manager";
  const officeNumber = "Office Number";
  const manager = new Manager(employeeName, id, email, role, officeNumber);

  expect(manager.officeNumber).toEqual(officeNumber);

  });
});

describe('Manager getRole()', () => {
  it('retrieves the Manager Role', () => {

  const employeeName = "Manager Name";
  const id = "1";
  const email = "test@test.com";
  const role = "Manager";
  const officeNumber = "Office Number";
  const manager = new Manager(employeeName, id, email, role, officeNumber);

  expect(manager.getRole()).toEqual(role);

  });

});

describe('Manager getOfficeNumber()', () => {
  it('retrieves the Manager Office Number', () => {

  const employeeName = "Manager Name";
  const id = "1";
  const email = "test@test.com";
  const role = "Manager";
  const officeNumber = "Office Number";
  const manager = new Manager(employeeName, id, email, role, officeNumber);

  expect(manager.getOfficeNumber()).toEqual(officeNumber);

  });

});