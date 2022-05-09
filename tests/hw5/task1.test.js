const task1 = require('../../tasks/hw5/task1');
const getArr = task1.getArr;
const getArrSumElements = task1.getArrSumElements; 
const getModifyArr = task1.getModifyArr;  

arr = getArr(10);

describe("getArr", () => {
    it('is a function', () => {
        expect(typeof getArr).toBe("function");
    });
    it('Function getArr return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
        expect(getArr(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it('function"s return is a typeof "object"', () => {
        expect(typeof getArr(10)).toBe("object");
    });        
});

describe("getArrSumElements", () => {

    it('is a function', () => {
        expect(typeof getArrSumElements).toBe("function");
    });
    it('Function getArrSumElements return 45', () => {
        expect(getArrSumElements(arr)).toEqual(45);
    });
    it('function"s return is a typeof "number"', () => {
        expect(typeof getArrSumElements(arr)).toBe("number");
    });
});

describe("getModifyArr", () => {

    it('is a function', () => {
        expect(typeof getModifyArr).toBe("function");
    });
    it('Function getModifyArr return [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]', () => {
        expect(getModifyArr(arr)).toEqual([0, 2, 4, 6, 8, 10, 12, 14, 16, 18]);
    });
    it('function"s return is a typeof "object"', () => {
        expect(typeof getModifyArr(arr)).toBe("object");
    });
});