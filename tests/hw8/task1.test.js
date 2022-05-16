import { getParseDate, getDayOfTheWeek } from '../../tasks/hw8/task1';

describe("getParseDate", () => {
    it('is a function', () => {
        expect(getParseDate).toBeInstanceOf(Function);
    });
    it('Function getParseDate return ["09", "06", "2022"] for "09.06.2022"', () => {
        expect(getParseDate("09.06.2022")).toEqual(["09", "06", "2022"]);
    });      
    it('function"s return is a typeof "object"', () => {
        expect(getParseDate("09.06.2022")).toBeInstanceOf(Object);
    });        
});

describe("getDayOfTheWeek", () => {

    const parseDate = getParseDate("09.05.2022");

    it('is a function', () => {
        expect(getDayOfTheWeek).toBeInstanceOf(Function);
    });
    it('Function getDayOfTheWeek return Monday for "09.05.2022"', () => {
        expect(getDayOfTheWeek(parseDate)).toBe("Monday");
    });      
    it('function"s return is a typeof "string"', () => {
        expect(typeof getDayOfTheWeek(parseDate)).toBe("string");
    });        
});