const Intern = require("../index.js");

describe('Intern', () => {
    it('capture input and pass them to the class', () => {

    this.employeeName = "Intern Name";
    this.id = "1";
    this.email = "test@test.com";
    this.role = "Intern";
    this.school = "School";

    const manager = new Intern(this.employeeName, this.id, this.email, this.role, this.school);

    expect(this.employeeName).toEqual("Intern Name");
    expect(this.id).toEqual("1");
    expect(this.email).toEqual("test@test.com");
    expect(this.role).toEqual("Intern");
    expect(this.school).toEqual("School");
    });
  });
