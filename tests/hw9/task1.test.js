const task1 = require('../../tasks/hw9/task1');
const isRectangular = task1.isRectangular;


describe("isRectangular", () => {
    it('is a function', () => {
        expect(isRectangular).toBeInstanceOf(Function);
    });
    it('Function isRectangular return true for [3, 4, 5] ([a, b, c])', () => {
        expect(isRectangular([3, 4, 5])).toBeTruthy();
    });      
    it('Function isRectangular return true for [3, 4, 6] ([a, b, c])', () => {
        expect(isRectangular([3, 4, 6])).toBeFalsy();
    });
    it('Function isRectangular return true for [0, 4, 6] ([a, b, c])', () => {
        expect(isRectangular([0, 4, 6])).toBeFalsy();
    });          
    it('Function isRectangular return true for [-3, 4, 6] ([a, b, c])', () => {
        expect(isRectangular([-3, 4, 6])).toBeFalsy();
    });              
    it('function"s return is a typeof "boolean"', () => {
        expect(typeof isRectangular([3, 4, 5])).toBe("boolean");
    });        
});