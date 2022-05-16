import { lenOfTwoStrings } from "../../tasks/hw1/task2";

describe("lenOfTwoStrings", () => {
    it('is a function', () => {
        expect(typeof lenOfTwoStrings).toBe("function");
    });
    it('"abcd", "123sdf" common lenght is 10 symbols', () => {
        expect(lenOfTwoStrings("abcd", "123sdf")).toBe(10);
    });
    it('function"s return is a typeof "number"', () => {
        expect(typeof lenOfTwoStrings("abcd", "123sdf")).toBe("number");
    });        
});