const Engineer = require("../index.js");

describe('Engineer', () => {
    it('capture input and pass them to the class', () => {

    this.employeeName = "Engineer Name";
    this.id = "1";
    this.email = "test@test.com";
    this.role = "Engineer";
    this.gitHub = "GitHub";

    const manager = new Engineer(this.employeeName, this.id, this.email, this.role, this.gitHub);

    // Assert
    expect(this.employeeName).toEqual("Engineer Name");
    expect(this.id).toEqual("1");
    expect(this.email).toEqual("test@test.com");
    expect(this.role).toEqual("Engineer");
    expect(this.gitHub).toEqual("GitHub");
    });
  });
