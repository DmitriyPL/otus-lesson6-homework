import { getCircumferenceLength, getCircleArea } from '../../tasks/hw9/task2';

describe('getCircumferenceLength', () => {
  it('is a function', () => {
    expect(getCircumferenceLength).toBeInstanceOf(Function);
  });
  it('Function getCircumferenceLength return 18.85', () => {
    expect(getCircumferenceLength(3)).toBe('18.85');
  });
  it('Function getCircumferenceLength return 0', () => {
    expect(getCircumferenceLength(0)).toBe('0.00');
  });
  it('Function getCircumferenceLength return 25.13', () => {
    expect(getCircumferenceLength(4)).toBe('25.13');
  });
  it('Function getCircumferenceLength return 31.42', () => {
    expect(getCircumferenceLength(5)).toBe('31.42');
  });
  it('function"s return is a typeof "boolean"', () => {
    expect(typeof getCircumferenceLength(3)).toBe('string');
  });
});

describe('getCircleArea', () => {
  it('is a function', () => {
    expect(getCircleArea).toBeInstanceOf(Function);
  });
  it('Function getCircleArea return 28.27', () => {
    expect(getCircleArea(3)).toBe('28.27');
  });
  it('Function getCircleArea return 0', () => {
    expect(getCircleArea(0)).toBe('0.00');
  });
  it('Function getCircleArea return 50.27', () => {
    expect(getCircleArea(4)).toBe('50.27');
  });
  it('Function getCircleArea return 78.54', () => {
    expect(getCircleArea(5)).toBe('78.54');
  });
  it('function"s return is a typeof "string"', () => {
    expect(typeof getCircleArea(3)).toBe('string');
  });
});
