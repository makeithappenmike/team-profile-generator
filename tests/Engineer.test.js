const Engineer = require("../index.js");

describe('Engineer', () => {
    it('capture input and pass them to the class', () => {

    const employeeName = "Engineer Name";
    // const id = "1";
    // const email = "test@test.com";
    // const role = "Engineer";
    // const gitHub = "GitHub";

    const engineer = new Engineer(employeeName);

    expect(engineer.employeeName).toEqual(employeeName);
    // expect(engineer.id).toEqual("1");
    // expect(engineer.email).toEqual("test@test.com");
    // expect(engineer.role).toEqual("Engineer");
    // expect(engineer.gitHub).toEqual("GitHub");
    });
  });

  describe('Engineer', () => {
    it('capture input and pass them to the class', () => {

    const employeeName = "Engineer Name";
    const id = "1";
    // const email = "test@test.com";
    // const role = "Engineer";
    // const gitHub = "GitHub";

    const engineer = new Engineer(employeeName, id);

    // expect(engineer.employeeName).toEqual(employeeName);
    expect(engineer.id).toEqual(id);
    // expect(engineer.email).toEqual("test@test.com");
    // expect(engineer.role).toEqual("Engineer");
    // expect(engineer.gitHub).toEqual("GitHub");
    });
  });
