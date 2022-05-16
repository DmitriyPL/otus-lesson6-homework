import { sumOfNumbers } from "../../tasks/hw1/task3";

describe("sumOfNumbers", () => {
  it("is a function", () => {
    expect(typeof sumOfNumbers).toBe("function");
  });
  it('"123" sum of numbers is 6', () => {
    expect(sumOfNumbers(123)).toBe(6);
  });
  it('"1s3" sum of numbers is 4', () => {
    expect(sumOfNumbers(13)).toBe(4);
  });
  it('"" sum of numbers is 0', () => {
    expect(sumOfNumbers(234)).toBe(9);
  });
  it('function"s return is a typeof "number"', () => {
    expect(typeof sumOfNumbers(234)).toBe("number");
  });
});
