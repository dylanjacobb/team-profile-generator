// Starter file provided by Instructor (03/09/2021) AC

const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const emp = new Employee();
    expect(emp instanceof Employee).toEqual(true);
});

test("Can set name via constructor arguments", () => {
    const empName = '';
    const emp = new Employee(empName);
    expect(emp.empName).toBe(empName);
});

test("Can set id via constructor argument", () => {
    const empID = '';
    const emp = new Employee();
    expect(emp.empID).toBe(empID);
});

test("Can set email via constructor argument", () => {
    const empEmail = '';
    const emp = new Employee();
    expect(emp.empEmail).toBe(empEmail);
});

test("Can get name via getName()", () => {
    
});

test("Can get id via getId()", () => {

});

test("Can get email via getEmail()", () => {

});

test("getRole() should return \"Employee\"", () => {

});
