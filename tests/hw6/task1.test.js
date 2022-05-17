import { getDiff } from "../../tasks/hw6/task1";

describe("getDiff", () => {
  it("is a function", () => {
    expect(typeof getDiff).toBe("function");
  });
  it("Function getDiff return diff between 10 and 2 = 8", () => {
    expect(getDiff(10, 2)).toBe(8);
  });
  it("Function getDiff return diff between -2 and -3 = 1", () => {
    expect(getDiff(-3, -2)).toBe(1);
  });
  it("Function getDiff return diff between 0 and -3 = 3", () => {
    expect(getDiff(0, -3)).toBe(3);
  });
  it('function"s return is a typeof "number"', () => {
    expect(typeof getDiff(0, -3)).toBe("number");
  });
});
