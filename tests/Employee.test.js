const Employee = require("../index.js");

describe('Employee', () => {
    it('capture input and pass them to the class', () => {

    this.employeeName = "Employee Name";
    this.id = "1";
    this.email = "test@test.com";
    this.role = "Employee";

    const manager = new Employee(this.employeeName, this.id, this.email, this.role);

    // Assert
    expect(this.employeeName).toEqual("Employee Name");
    expect(this.id).toEqual("1");
    expect(this.email).toEqual("test@test.com");
    expect(this.role).toEqual("Employee");
    });
  });
