const task1 = require('../../tasks/hw3/task1');
const calcSum50to100 = task1.calcSum50to100; 


describe("calcSum50to100", () => {
    it('is a function', () => {
        expect(typeof calcSum50to100).toBe("function");
    });
    it('Sum of all numbers between 50-100 = 3825', () => {
        expect(calcSum50to100()).toBe(3825);
    });
    it('function"s return is a typeof "number"', () => {
        expect(typeof calcSum50to100()).toBe("number");
    });        
});