import { getMaxOfTwoNumbers } from "../../tasks/hw2/task1";

describe("getMaxOfTwoNumbers", () => {
  it("is a function", () => {
    expect(typeof getMaxOfTwoNumbers).toBe("function");
  });
  it("betwen 2 and 5, 5 is max", () => {
    expect(getMaxOfTwoNumbers(2, 5)).toBe(5);
  });
  it("betwen -2 and -5, -2 is max", () => {
    expect(getMaxOfTwoNumbers(-2, -5)).toBe(-2);
  });
  it('function"s return is a typeof "number"', () => {
    expect(typeof getMaxOfTwoNumbers(2, 10)).toBe("number");
  });
});
