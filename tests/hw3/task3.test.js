import { getArithmeticMeanForOdd } from "../../tasks/hw3/task3";

describe("getArithmeticMeanForOdd", () => {
  it("is a function", () => {
    expect(typeof getArithmeticMeanForOdd).toBe("function");
  });
  it("Average of all odd numbers between 1-10 = 5.00", () => {
    expect(getArithmeticMeanForOdd(10)).toBe("5.00");
  });
  it("Average of all odd numbers between 1-20 = 10.00", () => {
    expect(getArithmeticMeanForOdd(20)).toBe("10.00");
  });
  it("Average of all odd numbers between 1-30 = 15.00", () => {
    expect(getArithmeticMeanForOdd(30)).toBe("15.00");
  });
  it('function"s return is a typeof "number"', () => {
    expect(typeof getArithmeticMeanForOdd()).toBe("string");
  });
});
