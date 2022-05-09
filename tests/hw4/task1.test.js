const task1 = require('../../tasks/hw4/task1');
const makeUser = task1.makeUser;
const addAgetoUser = task1.addAgetoUser; 
const getAdmin = task1.getAdmin;  

user = { name: "John" };

describe("makeUser", () => {
    it('is a function', () => {
        expect(typeof makeUser).toBe("function");
    });
    it('Function makeUser return { name : "{name}" }', () => {
        expect(makeUser("John")).toEqual(user);
    });
    it('function"s return is a typeof "object"', () => {
        expect(typeof makeUser("John")).toBe("object");
    });        
});

describe("addAgetoUser", () => {

    it('is a function', () => {
        expect(typeof addAgetoUser).toBe("function");
    });
    it('Function addAgetoUser return {age: "{age}", name : "{name}"}', () => {
        expect(addAgetoUser(user, 25)).toEqual({age: 25, name: "John"});
    });
    it('function"s return is a typeof "object"', () => {
        expect(typeof addAgetoUser(user, 25)).toBe("object");
    });
});

describe("getAdmin", () => {

    it('is a function', () => {
        expect(typeof getAdmin).toBe("function");
    });
    it('Function getAdmin return {role: "{role}", age: "{age}", name : "{name}"}', () => {
        expect(getAdmin(user)).toEqual({ role: "admin", age: 25, name: "John" });
    });
    it('function"s return is a typeof "object"', () => {
        expect(typeof getAdmin(user)).toBe("object");
    });
});