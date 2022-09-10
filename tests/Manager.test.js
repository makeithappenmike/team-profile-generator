const Manager = require("../index.js");

describe('Manager', () => {
    it('capture input and pass them to the class', () => {

    this.employeeName = "Manager Name";
    this.id = "1";
    this.email = "test@test.com";
    this.role = "Manager";
    this.officeNumber = "123-456-7890";

    const manager = new Manager(this.employeeName, this.id, this.email, this.role, this.officeNumber);

    // Assert
    expect(this.employeeName).toEqual("Manager Name");
    expect(this.id).toEqual("1");
    expect(this.email).toEqual("test@test.com");
    expect(this.role).toEqual("Manager");
    expect(this.officeNumber).toEqual("123-456-7890");
    });
  });
