import { calcSum, calcMultiplication } from "../../tasks/hw1/task1";

describe("calcSum", () => {
  it("is a function", () => {
    expect(typeof calcSum).toBe("function");
  });
  it("5 + 5 = 10", () => {
    expect(calcSum(5, 5)).toBe(10);
  });
  it('function"s return is a typeof "number"', () => {
    expect(typeof calcMultiplication(5, 5)).toBe("number");
  });
});

describe("calcMultiplication", () => {
  it("is a function", () => {
    expect(typeof calcMultiplication).toBe("function");
  });
  it("5 * 5 = 25", () => {
    expect(calcMultiplication(5, 5)).toBe(25);
  });
  it('function"s return is a typeof "number"', () => {
    expect(typeof calcMultiplication(5, 5)).toBe("number");
  });
});
