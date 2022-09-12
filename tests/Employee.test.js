const Employee = require("../index.js");

  describe('Employee', () => {
    it('captures the Employee Name', () => {

      const employeeName = "Engineer Name";
      const employee = new Employee(employeeName);

    expect(employee.employeeName).toEqual(employeeName);
    });
  });

  describe('Employee', () => {
    it('captures the Employee ID', () => {

      const employeeName = "Engineer Name";
      const id = "1";
      const employee = new Employee(employeeName, id);

    expect(employee.id).toEqual(id);
    });
  });

  describe('Employee', () => {
    it('captures the Employee Email', () => {

      const employeeName = "Engineer Name";
      const id = "1";
      const email = "test@test.com";
      const employee = new Employee(employeeName, id, email);

    expect(employee.email).toEqual(email);
    });
  });

  describe('Employee', () => {
    it('captures the Employee role', () => {

      const employeeName = "Engineer Name";
      const id = "1";
      const email = "test@test.com";
      const role = "Engineer";
      const employee = new Employee(employeeName, id, email, role);

    expect(employee.role).toEqual(role);
    });
  });
