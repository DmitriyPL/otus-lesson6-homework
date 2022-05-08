const task2 = require('../../tasks/hw2/task2');
const getMonthName = task2.getMonthName; 
const inputIsOk = task2.inputIsOk;


describe("getMonthName", () => {
    it('is a function', () => {
        expect(typeof getMonthName).toBe("function");
    });
    it('1 month is a "Январь"', () => {
        expect(getMonthName(1)).toBe("Январь");
    });
    it('9 month is a "Сентябрь"', () => {
        expect(getMonthName(9)).toBe("Сентябрь");
    });    
    it('function"s return is a typeof "string"', () => {
        expect(typeof getMonthName(10)).toBe("string");
    });        
});

describe("inputIsOk", () => {
    it('is a function', () => {
        expect(typeof inputIsOk).toBe("function");
    });
    it('1 month is a "Январь" it is OK', () => {
        expect(inputIsOk(1)).toBeTruthy();
    });
    it('-1 month is "undefined" it is false', () => {
        expect(inputIsOk(-1)).toBeFalsy();
    });
    it('13 month is not exist it is false', () => {
        expect(inputIsOk(13)).toBeFalsy();
    });
    it('function"s return is a typeof "boolean"', () => {
        expect(typeof inputIsOk(10)).toBe("boolean");
    });    
});