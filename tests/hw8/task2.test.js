const task2 = require('../../tasks/hw8/task2');
const getMinuteOfThisDay = task2.getMinuteOfThisDay;


describe("getMinuteOfThisDay", () => {

    curTime = new Date(2022, 5, 11, 22, 14, 0);

    it('is a function', () => {
        expect(getMinuteOfThisDay).toBeInstanceOf(Function);
    });
    it('Function getMinuteOfThisDay return 1334 for "22:14"', () => {
        expect(getMinuteOfThisDay(curTime)).toEqual(1334);
    });      
    it('function"s return is a typeof "number"', () => {
        expect(typeof getMinuteOfThisDay(curTime)).toBe("number");
    });        
});