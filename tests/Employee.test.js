const Employee = require("../lib/Employee");

  describe('Employee Name', () => {
    it('captures the Employee Name', () => {

    const employeeName = "Employee Name";
    const employee = new Employee(employeeName);

    expect(employee.employeeName).toEqual(employeeName);

    });
  });

  describe('Employee ID', () => {
    it('captures the Employee ID', () => {

    const employeeName = "Employee Name";
    const id = "1";
    const employee = new Employee(employeeName, id);

    expect(employee.id).toEqual(id);

    });
  });

  describe('Employee Email', () => {
    it('captures the Employee Email', () => {

    const employeeName = "Employee Name";
    const id = "1";
    const email = "test@test.com";
    const employee = new Employee(employeeName, id, email);

    expect(employee.email).toEqual(email);

    });
  });

  describe('Employee Role', () => {
    it('captures the Employee Role', () => {

    const employeeName = "Employee Name";
    const id = "1";
    const email = "test@test.com";
    const role = "Employee";
    const employee = new Employee(employeeName, id, email, role);

    expect(employee.role).toEqual(role);

    });

  });

  describe('Employee getName()', () => {
    it('retrieves the Employee Name', () => {

    const employeeName = "Employee Name";
    const id = "1";
    const email = "test@test.com";
    const role = "Employee";
    const employee = new Employee(employeeName, id, email, role);

    expect(employee.getName()).toEqual(employeeName);

    });

  });

  describe('Employee getId()', () => {
    it('retrieves the Employee Id', () => {

    const employeeName = "Employee Name";
    const id = "1";
    const email = "test@test.com";
    const role = "Employee";
    const employee = new Employee(employeeName, id, email, role);

    expect(employee.getId()).toEqual(id);

    });

  });

  describe('Employee getEmail()', () => {
    it('retrieves the Employee Email', () => {

    const employeeName = "Employee Name";
    const id = "1";
    const email = "test@test.com";
    const role = "Employee";
    const employee = new Employee(employeeName, id, email, role);

    expect(employee.getEmail()).toEqual(email);

    });

  });

  describe('Employee getRole()', () => {
    it('retrieves the Employee Role', () => {

    const employeeName = "Employee Name";
    const id = "1";
    const email = "test@test.com";
    const role = "Employee";
    const employee = new Employee(employeeName, id, email, role);

    expect(employee.getRole()).toEqual(role);

    });

  });
