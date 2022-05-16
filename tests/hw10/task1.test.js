import { isDate, isEmail } from "../../tasks/hw10/task1";

describe("isDate", () => {
  it("is a function", () => {
    expect(isDate).toBeInstanceOf(Function);
  });
  it('Function isDate return true for "2016-07-21"', () => {
    expect(isDate("2016-07-21")).toBeTruthy();
  });
  it('Function isDate return false for "2016.07-21"', () => {
    expect(isDate("2016.07-21")).toBeFalsy();
  });
  it('Function isDate return true for "2016/07/21"', () => {
    expect(isDate("2016/07/21")).toBeTruthy();
  });
  it('Function isDate return false for "20160721"', () => {
    expect(isDate("20160721")).toBeFalsy();
  });
  it('function"s return is a typeof "boolean"', () => {
    expect(typeof isDate("20160721")).toBe("boolean");
  });
});

describe("isEmail", () => {
  it("is a function", () => {
    expect(isEmail).toBeInstanceOf(Function);
  });
  it('Function isEmail return true for "john@gmail.com"', () => {
    expect(isEmail("john@gmail.com")).toBeTruthy();
  });
  it('Function isEmail return false for "john-gmail.com"', () => {
    expect(isEmail("john-gmail.com")).toBeFalsy();
  });
  it('Function isEmail return false for "john@gmail"', () => {
    expect(isEmail("john@gmail")).toBeFalsy();
  });
  it('Function isEmail return true for "john@gmail@notbug.com"', () => {
    expect(isEmail("john@gmail@notbug.com")).toBeTruthy();
  });
  it('function"s return is a typeof "boolean"', () => {
    expect(typeof isEmail("john@gmail.com")).toBe("boolean");
  });
});
