import { getRadius, getSize, circleInSquare } from '../../tasks/hw2/task3';

describe('getRadius', () => {
  it('is a function', () => {
    expect(typeof getRadius).toBe('function');
  });
  it('S=pi*R^2, S=12.5664, R=2', () => {
    expect(getRadius(12.5664)).toBe('2.00');
  });
  it('S=pi*R^2, S=3.1416, R=1', () => {
    expect(getRadius(3.1416)).toBe('1.00');
  });
  it('function"s return is a typeof "string"', () => {
    expect(typeof getRadius(10)).toBe('string');
  });
});

describe('getSize', () => {
  it('is a function', () => {
    expect(typeof getSize).toBe('function');
  });
  it('S=a*a, S=4, a=2', () => {
    expect(getSize(4)).toBe('2.00');
  });
  it('S=a*a, S=9, a=3', () => {
    expect(getSize(9)).toBe('3.00');
  });
  it('function"s return is a typeof "string"', () => {
    expect(typeof getSize(10)).toBe('string');
  });
});

describe('circleInSquare', () => {
  it('is a function', () => {
    expect(typeof circleInSquare).toBe('function');
  });
  it('1 month is a "Январь" it is OK', () => {
    expect(circleInSquare(2, 4)).toBeTruthy();
  });
  it('-1 month is "undefined" it is false', () => {
    expect(circleInSquare(4, 4)).toBeFalsy();
  });
  it('13 month is not exist it is false', () => {
    expect(circleInSquare(3.5, 4)).toBeFalsy();
  });
  it('function"s return is a typeof "boolean"', () => {
    expect(typeof circleInSquare(2, 3)).toBe('boolean');
  });
});
