const Employee = require("../lib/Employee");

  describe('Employee', () => {
    it('captures the Employee Name', () => {

    const employeeName = "Employee Name";
    const employee = new Employee(employeeName);

    expect(employee.employeeName).toEqual(employeeName);

    });
  });

  describe('Employee', () => {
    it('captures the Employee ID', () => {

    const employeeName = "Employee Name";
    const id = "1";
    const employee = new Employee(employeeName, id);

    expect(employee.id).toEqual(id);

    });
  });

  describe('Employee', () => {
    it('captures the Employee Email', () => {

    const employeeName = "Employee Name";
    const id = "1";
    const email = "test@test.com";
    const employee = new Employee(employeeName, id, email);

    expect(employee.email).toEqual(email);

    });
  });

  describe('Employee', () => {
    it('captures the Employee role', () => {

    const employeeName = "Employee Name";
    const id = "1";
    const email = "test@test.com";
    const role = "Employee";
    const employee = new Employee(employeeName, id, email, role);

    expect(employee.role).toEqual(role);

    });

  });
