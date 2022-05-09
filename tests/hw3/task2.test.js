const task2 = require('../../tasks/hw3/task2');
const multTableFor7 = task2.multTableFor7; 


describe("multTableFor7", () => {
    it('is a function', () => {
        expect(typeof multTableFor7).toBe("function");
    });
    it('Table of mult for 7', () => {
        expect(multTableFor7()).toEqual(
            [ "7 x 1 = 7",
              "7 x 2 = 14",
              "7 x 3 = 21",
              "7 x 4 = 28",
              "7 x 5 = 35",
              "7 x 6 = 42",
              "7 x 7 = 49",
              "7 x 8 = 56",
              "7 x 9 = 63"
            ]
        );
    });
    it('function"s return is a typeof "object"', () => {
        expect(typeof multTableFor7()).toBe("object");
    });        
});