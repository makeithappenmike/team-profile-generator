const Manager = require("../index.js");

describe('Manager', () => {
    it('should capture a Manager name', () => {

    const manager = new Manager("Manager Name", "1", "test@test.com", "Manager", "123-456-7890");

    // Assert
    expect(this.employeeName).toEqual("Manager Name");
    expect(this.id).toEqual("1");
    expect(this.email).toEqual("test@test.com");
    expect(this.role).toEqual("Manager");
    expect(this.officeNumber).toEqual("123-456-7890");
    });
  });
