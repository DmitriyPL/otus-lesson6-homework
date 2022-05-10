const task2 = require('../../tasks/hw6/task2');
const isWord = task2.isWord;


describe("isWord", () => {
    it('is a function', () => {
        expect(typeof isWord).toBe("function");
    });
    it('true for "one"', () => {
        expect(isWord("one")).toBeTruthy();
    });
    it('true for " one  "', () => {
        expect(isWord(" one  ")).toBeTruthy();
    });
    it('true for " one two  "', () => {
        expect(isWord(" one two  ")).toBeFalsy();
    });
    it('return typeof "boolean"', () => {
        expect(typeof isWord("one")).toBe("boolean");
    });        
});